import type { Schema, Struct } from '@strapi/strapi';

export interface AddressShippingAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_shipping_addresses';
  info: {
    description: '';
    displayName: 'ShippingAddress';
    icon: 'address-card';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    apartment: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    postalCode: Schema.Attribute.String & Schema.Attribute.Required;
    province: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CustomerCustomer extends Struct.ComponentSchema {
  collectionName: 'components_customer_customers';
  info: {
    description: '';
    displayName: 'Customer';
    icon: 'user';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    firstName: Schema.Attribute.String & Schema.Attribute.Required;
    lastName: Schema.Attribute.String & Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_order_items_items';
  info: {
    description: '';
    displayName: 'Items';
    icon: 'shopping-cart';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
  };
}

export interface VariantVairiant extends Struct.ComponentSchema {
  collectionName: 'components_variant_vairiants';
  info: {
    description: '';
    displayName: 'variant';
    icon: 'project-diagram';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    sku: Schema.Attribute.String;
    stockQuantitty: Schema.Attribute.Integer;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address.shipping-address': AddressShippingAddress;
      'customer.customer': CustomerCustomer;
      'order-items.items': OrderItemsItems;
      'variant.vairiant': VariantVairiant;
    }
  }
}
