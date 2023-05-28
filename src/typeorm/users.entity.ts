import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({
    nullable: false,
    default: ''
  })
  email: string;

  @Column({
    nullable: false,
    default: ''
  })
  name: string;

  @Column({
    nullable: false,
    default: ''
  })
  password: string;

  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: Date;
}
