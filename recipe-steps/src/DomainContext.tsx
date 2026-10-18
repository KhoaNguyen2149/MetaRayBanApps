import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import type {ReactNode} from 'react';
import {initialRecords} from './domain';
import type {DomainRecord} from './domain';

const STORAGE_KEY = 'recipe-steps.progress.v1';

type DomainValue = {
  records: DomainRecord[];
  advanceRecord: (id: string) => void;
};

const DomainContext = createContext<DomainValue | null>(null);

function loadRecords(): DomainRecord[] {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, number>;
    return initialRecords.map(record => {
      const progress = saved[record.id];
      return typeof progress === 'number' && progress >= 0 && progress <= record.steps.length
        ? {...record, progress}
        : record;
    });
  } catch {
    return initialRecords;
  }
}

export function DomainProvider({children}: {children: ReactNode}) {
  const [records, setRecords] = useState(loadRecords);

  useEffect(() => {
    try {
      const progress = Object.fromEntries(records.map(record => [record.id, record.progress]));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage unavailable: progress lasts for this session only.
    }
  }, [records]);

  // Moves to the next step; after the last step, starts the recipe over.
  const advanceRecord = useCallback((id: string) => {
    setRecords(current =>
      current.map(record => {
        if (record.id !== id) return record;
        const next = record.progress >= record.steps.length ? 0 : record.progress + 1;
        // Finishing the last step records when the recipe was cooked.
        const timestamp = next === record.steps.length ? new Date().toISOString() : record.timestamp;
        return {...record, progress: next, timestamp};
      }),
    );
  }, []);

  const value = useMemo(() => ({records, advanceRecord}), [records, advanceRecord]);

  return <DomainContext.Provider value={value}>{children}</DomainContext.Provider>;
}

export function useDomain(): DomainValue {
  const value = useContext(DomainContext);
  if (!value) throw new Error('useDomain must be used inside DomainProvider');
  return value;
}
