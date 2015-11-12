import Ember from 'ember';

// model hook
export default Ember.Route.extend({
    model() {
        return this.store.findAll('message')

        // another way to get the data:
        // var data = Ember.$.getJSON('http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages');
  }
});
