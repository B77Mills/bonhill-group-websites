const withContent = require('@bonhill-group/package-global/middleware/with-content');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/content-page');
const contact = require('@bonhill-group/package-global/templates/content/contact');
const company = require('../templates/content/company');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));

  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
  }));

  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));

  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
  }));
};
