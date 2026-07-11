import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto, SigninDto } from './dto/user.dto';

import {
  createUser,
  signin,
  getUsers,
  getUserById,
  deleteUser,
} from './function';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUser(createUserDto);
  }

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return signin(signinDto)
  }

  @Get()
  findAll() {
    return getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return getUserById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return deleteUser(+id);
  }
}
