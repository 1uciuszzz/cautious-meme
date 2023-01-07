import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: "名字",
  })
  firstName: string;

  @Column({
    comment: "姓氏",
  })
  lastName: string;

  @Column({
    comment: "电子邮箱",
  })
  email: string;

  @Column({
    comment: "用户名",
  })
  username: string;

  @Column({
    comment: "密码",
  })
  password: string;
}
