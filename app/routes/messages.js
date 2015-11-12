import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['hi', 'i', 'am']
        // return this.store.query('message');
  }
});
