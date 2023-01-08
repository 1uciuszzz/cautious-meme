import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: "名字",
    type: "varchar",
  })
  firstName: string;

  @Column({
    comment: "姓氏",
    type: "varchar",
  })
  lastName: string;

  @Column({
    comment: "电子邮箱",
    type: "varchar",
  })
  email: string;

  @Column({
    comment: "用户名",
    type: "varchar",
  })
  username: string;

  @Column({
    comment: "密码",
    type: "varchar",
  })
  password: string;

  @Column({
    comment: "入职时间",
    type: "date",
    nullable: true,
  })
  joinTime: string;

  @Column({
    comment: "已离职",
    type: "boolean",
    default: false,
  })
  departed: boolean;

  @Column({
    comment: "离职时间",
    type: "date",
    nullable: true,
  })
  leavingTime: string;

  @Column({
    comment: "离职原因",
    type: "varchar",
    nullable: true,
  })
  leavingReason: string;
}
