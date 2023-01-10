import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: "设置名称",
    type: "varchar",
  })
  name: string;

  @Column({
    comment: "系统标题",
    type: "varchar",
    default: "标题",
  })
  title: string;

  @Column({
    comment: "系统副标题",
    type: "varchar",
    default: "副标题",
  })
  subTitle: string;

  @Column({
    comment: "logo的图片地址",
    type: "varchar",
    nullable: true,
  })
  logoImg: string;

  @Column({
    comment: "版权信息",
    type: "varchar",
    nullable: true,
  })
  copyright: string;

  @Column({
    comment: "icp备案号",
    type: "varchar",
    nullable: true,
  })
  icp: string;

  @Column({
    comment: "电子邮箱",
    type: "varchar",
    nullable: true,
  })
  email: string;

  @Column({
    comment: "联系电话",
    type: "varchar",
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    comment: "主色",
    type: "varchar",
    default: "#057AFF",
  })
  primaryColor: string;

  @Column({
    comment: "主内容色",
    type: "varchar",
    default: "#cce4ff",
  })
  primaryContentColor: string;

  @Column({
    comment: "副色",
    type: "varchar",
    default: "#463AA1",
  })
  secondaryColor: string;

  @Column({
    comment: "副内容色",
    type: "varchar",
    default: "#cdc7ff",
  })
  secondaryContentColor: string;

  @Column({
    comment: "成功色",
    type: "varchar",
    default: "#80ced1",
  })
  successColor: string;

  @Column({
    comment: "成功内容色",
    type: "varchar",
    default: "#004042",
  })
  successContentColor: string;

  @Column({
    comment: "警告色",
    type: "varchar",
    default: "#efd8bd",
  })
  warningColor: string;

  @Column({
    comment: "警告内容色",
    type: "varchar",
    default: "#572e00",
  })
  warningContentColor: string;

  @Column({
    comment: "错误色",
    type: "varchar",
    default: "#e58b8b",
  })
  errorColor: string;

  @Column({
    comment: "错误内容色",
    type: "varchar",
    default: "#470000",
  })
  errorContentColor: string;

  @Column({
    comment: "激活状态",
    type: "boolean",
    default: false,
  })
  activate: boolean;
}
