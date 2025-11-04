'use strict';

/**
 * shipping-fee service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shipping-fee.shipping-fee');
