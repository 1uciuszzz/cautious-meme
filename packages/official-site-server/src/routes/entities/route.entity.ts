import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: "路由路径",
    type: "varchar",
  })
  path: string;

  @Column({
    comment: "路由名称",
    type: "varchar",
  })
  name: string;
}
