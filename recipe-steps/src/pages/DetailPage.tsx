import {
  Button,
  ButtonRail,
  Page,
  Panel,
  ScrollView,
  TextColor,
  TextStyle,
  TextView,
} from '@wearables-ui-toolkit/mrbd';
import {useParams} from 'react-router-dom';
import {useDomain} from '../DomainContext';

export function DetailPage() {
  const {id} = useParams();
  const {records, advanceRecord} = useDomain();
  const record = records.find(candidate => candidate.id === id);

  if (!record) {
    return <NotFoundPage />;
  }

  const total = record.steps.length;
  const done = record.progress >= total;
  const isLastStep = record.progress === total - 1;

  return (
    <Page headerText="Cooking" enableSystemBarInset={false}>
      <div className="action-page-shell">
        <ScrollView insetForHeader tabIndex={0} ariaLabel={`${record.title} steps`}>
          <Panel width="100%">
            <div className="content-inset">
              <TextView as="p" textStyle={TextStyle.BODY2_EMPHASIZED}>
                {record.title}
              </TextView>
              <TextView as="p" textStyle={TextStyle.BODY2}>
                {done ? 'Every step is done. Enjoy your meal.' : record.steps[record.progress]}
              </TextView>
              <TextView as="p" textStyle={TextStyle.LABEL} textColor={TextColor.SECONDARY}>
                STEP
              </TextView>
              <TextView as="p" textStyle={TextStyle.META1}>
                {done ? 'Done' : `${record.progress + 1} of ${total}`}
              </TextView>
            </div>
          </Panel>
        </ScrollView>
        <div className="action-dock">
          <ButtonRail>
            <Button
              title={done ? 'Start over' : isLastStep ? 'Finish' : 'Next step'}
              onClick={() => advanceRecord(record.id)}
            />
          </ButtonRail>
        </div>
      </div>
    </Page>
  );
}

function NotFoundPage() {
  return (
    <Page headerText="Cooking" enableSystemBarInset={false}>
      <ScrollView insetForHeader tabIndex={0} ariaLabel="Recipe not found">
        <div className="content-inset">
          <TextView as="p" textStyle={TextStyle.BODY2}>
            This recipe isn't available.
          </TextView>
        </div>
      </ScrollView>
    </Page>
  );
}
