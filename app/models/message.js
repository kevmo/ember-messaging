import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr(),
  pic: DS.attr(),
  date: DS.attr(),
  useragent: DS.attr()
});
