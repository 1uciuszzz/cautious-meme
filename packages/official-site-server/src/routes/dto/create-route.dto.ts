import { ApiProperty } from "@nestjs/swagger";

export class CreateRouteDto {
  @ApiProperty()
  path: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  parentId: number;

  @ApiProperty({
    required: false,
  })
  icon: string;
}
