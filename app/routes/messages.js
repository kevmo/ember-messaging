import Ember from 'ember';

// model hook
export default Ember.Route.extend({
    model() {
        return this.store.findAll('message')
        // return this.store.query('message');
  }
});
