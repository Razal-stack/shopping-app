import EmberRouter from '@ember/routing/router';
import config from 'shopping-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('products');
  this.route('cart');
});
