import { EntitySchema }  from 'typeorm';

export default new EntitySchema({
  name: 'Post',
  tableName: 'posts',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    title: {
      type: 'varchar',
    },
    text: {
      type: 'text',
    },
  },
  relations: {
    categories: {
      target: 'Category',
      type: 'many-to-many',
      joinTable: true,
      cascade: true,
    },
  },
});
