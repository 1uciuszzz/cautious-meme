import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: "新闻标题",
    type: "varchar",
  })
  title: string;

  @Column({
    comment: "新闻副标题",
    type: "varchar",
  })
  subTitle: string;

  @Column({
    comment: "新闻内容",
    type: "text",
  })
  content: string;

  @Column({
    comment: "创建时间",
    type: "date",
    default: new Date(),
  })
  createTime: string;

  @Column({
    comment: "已发布",
    type: "boolean",
    default: false,
  })
  released: boolean;

  @Column({
    comment: "已删除",
    type: "boolean",
    default: false,
  })
  deleted: boolean;

  @Column({
    comment: "浏览量",
    type: "integer",
    default: 0,
  })
  views: number;
}
