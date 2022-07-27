//import Model from '@ember-data/model';
import DS from 'ember-data';
export default DS.Model.extend({
  title: DS.attr(),
  brand: DS.attr(),
  size: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  category: DS.attr(),
  description: DS.attr(),
});

// export default class ProductModel extends Model {

// }
