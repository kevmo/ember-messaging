// import ApplicationAdapter from './application';
//
// export default ApplicationAdapter.extend({
//     host: 'http://private-227b9-jsonapifizzbuzz.apiary-mock.com'
// });

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://private-227b9-jsonapifizzbuzz.apiary-mock.com'
});
