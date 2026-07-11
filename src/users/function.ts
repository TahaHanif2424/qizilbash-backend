import { prisma } from '../prisma';
import { CreateUserDto } from './dto/user.dto';
import { SigninDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

export async function createUser(data: CreateUserDto) {

  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });
  if (user) {
    return 'User already exists';
  }
  const hashedPassword = await hashPassword(data.password);
  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashedPassword,
      phone: data.phone,
    },
  });
}

export async function signin(data: SigninDto) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(data.password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  return user;
}

export async function getUsers() {
  return prisma.user.findMany();
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function deleteUser(id: number) {
  return prisma.user.delete({
    where: { id },
  });
}

function hashPassword(string: string) {
  return bcrypt.hash(string, 10)
} 