import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import User from "./User";
import Product from "./Product";

@Entity('carts')
export default class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.carts)
  user: User;

  @ManyToOne(() => Product)
  product: Product;

  @Column({ type: 'int', default: 1 })
  quantity: number;
}
