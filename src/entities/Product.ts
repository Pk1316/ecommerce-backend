import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import User from "./User";
import Category from './Category';

@Entity('products')
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  discount: number;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @ManyToOne(() => User, (user) => user.products)
  seller: User;
}
