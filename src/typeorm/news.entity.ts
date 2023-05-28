import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class News {
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

  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: Date;
}
