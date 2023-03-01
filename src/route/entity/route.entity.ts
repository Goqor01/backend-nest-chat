import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
