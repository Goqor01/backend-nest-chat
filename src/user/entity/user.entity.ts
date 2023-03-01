import { Message } from 'src/message/entity/message.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Message, (message) => message.from)
  public fromMessage!: Message[];

  @OneToMany(() => Message, (message) => message.to)
  public toMessage!: Message[];
}
