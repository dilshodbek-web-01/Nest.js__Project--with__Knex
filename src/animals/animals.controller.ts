import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CurrentUser } from 'src/auth/userInfo/getUserDecorator';
import { AnimalsService } from './animals.service';

interface ICourse {
  title: string;
  price: string;
}
@Controller('/animals')
@UseGuards(AuthGuard)
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get('/read')
  async getAnimals(@CurrentUser() userInfo) {
    return await this.animalsService.getAnimals(userInfo);
  }

  @Get('/read/:id')
  async getAnimal(@Param() animal, @CurrentUser() userInfo) {
    return await this.animalsService.getAnimal(animal, userInfo);
  }

  @Post('/create')
  async createAnimal(@Body() animalInfo: ICourse, @CurrentUser() userInfo) {
    return await this.animalsService.createAnimal(animalInfo, userInfo);
  }

  @Delete('delete/:id')
  async deleteAnimal(@Param() animal, @CurrentUser() userInfo) {
    return await this.animalsService.deleteAnimal(animal, userInfo);
  }

  @Put('update/:id')
  async updateAnimal(
    @Param() animal,
    @Body() updatedAnimal,
    @CurrentUser() userInfo,
  ) {
    return await this.animalsService.updateAnimal(
      animal,
      updatedAnimal,
      userInfo,
    );
  }
}
