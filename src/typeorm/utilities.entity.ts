import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Utilities {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  subtitle: string;

  @Column({
    nullable: false,
    default: '',
  })
  image: string;

  @Column({
    nullable: false,
    default: 1,
  })
  price: number;

  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: Date;
}
