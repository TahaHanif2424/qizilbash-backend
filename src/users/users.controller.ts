import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from './function';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUser(createUserDto);
  }

  @Get()
  findAll() {
    return getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return getUserById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return deleteUser(+id);
  }
}
