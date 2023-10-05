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
import { CarsService } from './cars.service';

interface ICar {
  title: String;
  price: String;
}

@Controller('/cars')
@UseGuards(AuthGuard)
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get('/read')
  async getCars(@CurrentUser() userInfo) {
    return await this.carsService.getCars(userInfo);
  }

  @Get('/read/:id')
  async getCar(@Param() car, @CurrentUser() userInfo) {
    return await this.carsService.getCar(car, userInfo);
  }

  @Post('/create')
  async createCar(@Body() carInfo: ICar, @CurrentUser() userInfo) {
    return await this.carsService.createCar(carInfo, userInfo);
  }

  @Delete('delete/:id')
  async deleteCar(@Param() car, @CurrentUser() userInfo) {
    return await this.carsService.deleteCar(car, userInfo);
  }

  @Put('update/:id')
  async updateCar(@Param() car, @Body() carInfo, @CurrentUser() userInfo) {
    return await this.carsService.updateCar(car, carInfo, userInfo);
  }
}
