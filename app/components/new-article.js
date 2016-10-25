import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    saveArticle() {
      var params = {
        heading: this.get('heading'),
        body: this.get('body'),
        author: this.get('author'),
        image: this.get('image'),
        type: this.get('type'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
