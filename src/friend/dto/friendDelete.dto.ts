import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class FriendAcceptDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @ApiProperty({
    description: '친구 삭제 되는 사람의 id',
    example: 1,
    required: true,
  })
  readonly friend_id: number;
}
