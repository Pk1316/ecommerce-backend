import { EntitySchema }  from 'typeorm';

export default new EntitySchema({
  name: 'Cart',
  tableName: 'carts',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    quantity: {
      type: 'int',
      default: 1,
    },
  },
  relations: {
    user: {
      target: 'User',
      type: 'many-to-one',
      joinColumn: true,
      cascade: true,
    },
    product: {
      target: 'Product',
      type: 'many-to-one',
      joinColumn: true,
      cascade: true,
    },
  },
});
