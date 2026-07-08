import { prisma } from '../prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export async function createUser(data: CreateUserDto) {
  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
    },
  });
}

export async function getUsers() {
  return prisma.user.findMany();
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function updateUser(id: number, data: UpdateUserDto) {
  return prisma.user.update({
    where: { id },
    data: {
      email: data.email,
      name: data.name,
    },
  });
}

export async function deleteUser(id: number) {
  return prisma.user.delete({
    where: { id },
  });
}
