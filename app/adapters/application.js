// import JSONAPIAdapter from '@ember-data/adapter/json-api';

// export default class ApplicationAdapter extends JSONAPIAdapter {
//   namespace: 'api';
// }

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
});
