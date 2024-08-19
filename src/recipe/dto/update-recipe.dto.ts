import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsString()
  ingredients: string;

  @ApiProperty()
  @IsString()
  instructions: string;
}
