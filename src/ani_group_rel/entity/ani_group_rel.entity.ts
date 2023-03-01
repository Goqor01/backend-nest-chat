import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ani_group_rel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
