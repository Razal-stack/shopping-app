// import { JSONAPISerializer } from 'miragejs';

// export default JSONAPISerializer.extend({});


import DS from 'ember-data';
import Ember from "ember";

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(key){
    return Ember.String.dasherize(key);
  },
  serializeId: function(id) {
    return id.toString();
  }
});