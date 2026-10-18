import {ListItem, Page, VerticalList} from '@wearables-ui-toolkit/mrbd';
import {useNavigate} from 'react-router-dom';
import {useDomain} from '../DomainContext';
import {formatPointInTime} from '../domain';
import {CollectionEmptyPage} from './CollectionEmptyPage';

export function CollectionPage() {
  const {records} = useDomain();
  const navigate = useNavigate();

  if (records.length === 0) {
    return <CollectionEmptyPage />;
  }

  return (
    <Page headerText="Recipes" enableSystemBarInset={false}>
      <VerticalList insetForHeader ariaLabel="Recipes">
        {records.map(record => (
          <ListItem
            key={record.id}
            title={record.title}
            subtitle={record.subtitle}
            timestamp={formatPointInTime(record.timestamp)}
            onClick={() => navigate(`/item/${record.id}`)}
          />
        ))}
      </VerticalList>
    </Page>
  );
}
