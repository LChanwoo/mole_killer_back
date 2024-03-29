import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostMailDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @ApiProperty({
    description: '받는 사람의 id',
    example: 1,
    required: true,
  })
  readonly user_id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '메일 제목',
    example: '메일 제목',
    required: true,
  })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '메일 내용',
    example: '메일 내용',
    required: true,
  })
  readonly contents: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  @ApiProperty({
    description: '아이템 id',
    example: 1,
    required: false,
  })
  readonly item_id: number;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  @ApiProperty({
    description: '아이템 수량',
    example: 1,
    required: false,
  })
  readonly qty: number;
}
