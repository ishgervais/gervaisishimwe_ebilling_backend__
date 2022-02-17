import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Gervais' })
  @Column({
    type: 'varchar',
    nullable: false
  })
  token: string;

  @ApiProperty()
  @Column({
    type: 'date',
    nullable: false
  })
  expireDate: Date;

  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
}
