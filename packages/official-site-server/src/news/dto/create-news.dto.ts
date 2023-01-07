import { ApiProperty } from "@nestjs/swagger";

export class CreateNewsDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  subTitle: string;

  @ApiProperty()
  content: string;
}
