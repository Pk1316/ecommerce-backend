import { EntitySchema }  from 'typeorm';

export default new EntitySchema({
  name: 'Order',
  tableName: 'orders',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    status: {
      type: 'varchar',
    },
    totalAmount: {
      type: 'decimal',
      precision: 10,
      scale: 2,
    },
  },
  relations: {
    user: {
      target: 'User',
      type: 'many-to-one',
      joinColumn: true,
      cascade: true,
    },
    orderItems: {
      target: 'OrderItem',
      type: 'one-to-many',
      inverseSide: 'order',
      cascade: true,
    },
  },
});
