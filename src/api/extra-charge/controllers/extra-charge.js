'use strict';

/**
 *  extra-charge controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::extra-charge.extra-charge');
