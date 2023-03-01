import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class did {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
