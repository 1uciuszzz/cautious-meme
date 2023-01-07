import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: "新闻标题",
  })
  title: string;

  @Column({
    comment: "新闻副标题",
  })
  subTitle: string;

  @Column({
    comment: "新闻内容",
  })
  content: string;

  @Column({
    comment: "创建时间",
    default: new Date().getTime(),
  })
  createTime: string;

  @Column({
    comment: "已发布",
    default: false,
  })
  released: boolean;

  @Column({
    comment: "已删除",
    default: false,
  })
  deleted: boolean;

  @Column({
    comment: "浏览量",
    default: 0,
  })
  views: number;
}
