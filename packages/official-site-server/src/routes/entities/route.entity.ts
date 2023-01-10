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

  @Column({
    comment: "父级路由id",
    type: "integer",
    default: 0,
  })
  parentId: number;

  @Column({
    comment: "图标",
    type: "varchar",
    default: "mdi-circle-small",
  })
  icon: string;
}
