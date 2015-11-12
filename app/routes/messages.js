import Ember from 'ember';

// model hook
export default Ember.Route.extend({
    model() {
        var data = this.store.findAll('message');

        return data;

        // another way to get the data:
        // var data = Ember.$.getJSON('http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages');
  }
});
