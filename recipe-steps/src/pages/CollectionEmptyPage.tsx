import {Page, ScrollView, TextStyle, TextView} from '@wearables-ui-toolkit/mrbd';

export function CollectionEmptyPage() {
  return (
    <Page headerText="Recipes" enableSystemBarInset={false}>
      <ScrollView insetForHeader tabIndex={0} ariaLabel="No recipes">
        <div className="content-inset">
          <TextView as="p" textStyle={TextStyle.BODY2_EMPHASIZED}>
            No recipes yet
          </TextView>
          <TextView as="p" textStyle={TextStyle.BODY2}>
            Recipes will appear here when they are available.
          </TextView>
        </div>
      </ScrollView>
    </Page>
  );
}
