import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  external_id: DS.attr(),
  userAgent: DS.attr()
});
