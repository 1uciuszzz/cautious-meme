import { ApiProperty } from "@nestjs/swagger";

export class CreateSettingDto {
  @ApiProperty()
  name: string;

  @ApiProperty({
    required: false,
  })
  title: string;

  @ApiProperty({
    required: false,
  })
  subTitle: string;

  @ApiProperty({
    required: false,
  })
  logoImg: string;

  @ApiProperty({
    required: false,
  })
  copyright: string;

  @ApiProperty({
    required: false,
  })
  icp: string;

  @ApiProperty({
    required: false,
  })
  email: string;

  @ApiProperty({
    required: false,
  })
  phoneNumber: string;

  @ApiProperty({
    required: false,
  })
  primaryColor: string;

  @ApiProperty({
    required: false,
  })
  primaryContentColor: string;

  @ApiProperty({
    required: false,
  })
  secondaryColor: string;

  @ApiProperty({
    required: false,
  })
  secondaryContentColor: string;

  @ApiProperty({
    required: false,
  })
  successColor: string;

  @ApiProperty({
    required: false,
  })
  successContentColor: string;

  @ApiProperty({
    required: false,
  })
  warningColor: string;

  @ApiProperty({
    required: false,
  })
  warningContentColor: string;

  @ApiProperty({
    required: false,
  })
  errorColor: string;

  @ApiProperty({
    required: false,
  })
  errorContentColor: string;
}
