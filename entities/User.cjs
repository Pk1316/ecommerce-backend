import { EntitySchema }  from 'typeorm';

export default  new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    username: {
      type: 'varchar',
      length: 50,
      unique: true,
    },
    email: {
      type: 'varchar',
      unique: true,
    },
    password: {
      type: 'varchar',
    },
    role: {
      type: 'varchar',
      default: 'buyer',
    },
  },
  relations: {
    orders: {
      target: 'Order',
      type: 'one-to-many',
      inverseSide: 'user',
      cascade: true,
    },
    carts: {
      target: 'Cart',
      type: 'one-to-many',
      inverseSide: 'user',
      cascade: true,
    },
  },
});
