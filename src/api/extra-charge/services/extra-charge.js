'use strict';

/**
 * extra-charge service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::extra-charge.extra-charge');
