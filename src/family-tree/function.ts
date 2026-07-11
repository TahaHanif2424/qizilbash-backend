import { prisma } from '../prisma';
import { CreateFamilyTreeDto, CreateFamilyMemberDto, UpdateFamilyMemberDto } from './dto/family-tree.dto';
import { Prisma } from '@prisma/client';

export async function createFamilyTree(data: CreateFamilyTreeDto) {
  return prisma.familyTree.create({
    data: {
      name: data.name,
      description: data.description,
      userId: data.userId,
    },
  });
}

export async function getFamilyTreesByUser(userId: number) {
  return prisma.familyTree.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getFamilyTreeById(id: string) {
  return prisma.familyTree.findUnique({
    where: { id },
    include: {
      members: true,
    },
  });
}

export async function addFamilyMember(treeId: string, data: CreateFamilyMemberDto) {
  const migrationHistoryJson = data.migrationHistory ? (data.migrationHistory as unknown as Prisma.InputJsonValue) : [];
  const photosJson = data.photos ? (data.photos as unknown as Prisma.InputJsonValue) : [];
  const documentsJson = data.documents ? (data.documents as unknown as Prisma.InputJsonValue) : [];

  return prisma.familyMember.create({
    data: {
      name: data.name,
      lifespan: data.lifespan,
      relationship: data.relationship,
      tribe: data.tribe,
      originCity: data.originCity,
      bio: data.bio,
      migrationHistory: migrationHistoryJson,
      photos: photosJson,
      documents: documentsJson,
      treeId: treeId,
      parentId: data.parentId || null,
    },
  });
}

export async function updateFamilyMember(memberId: string, data: UpdateFamilyMemberDto) {
  const updateData: Prisma.FamilyMemberUpdateInput = {};

  if (data.name !== undefined) updateData.name = data.name;
  if (data.lifespan !== undefined) updateData.lifespan = data.lifespan;
  if (data.relationship !== undefined) updateData.relationship = data.relationship;
  if (data.tribe !== undefined) updateData.tribe = data.tribe;
  if (data.originCity !== undefined) updateData.originCity = data.originCity;
  if (data.bio !== undefined) updateData.bio = data.bio;
  if (data.parentId !== undefined) {
    if (data.parentId) {
      updateData.parent = { connect: { id: data.parentId } };
    } else {
      updateData.parent = { disconnect: true };
    }
  }

  if (data.migrationHistory !== undefined) {
    updateData.migrationHistory = data.migrationHistory as unknown as Prisma.InputJsonValue;
  }
  if (data.photos !== undefined) {
    updateData.photos = data.photos as unknown as Prisma.InputJsonValue;
  }
  if (data.documents !== undefined) {
    updateData.documents = data.documents as unknown as Prisma.InputJsonValue;
  }

  return prisma.familyMember.update({
    where: { id: memberId },
    data: updateData,
  });
}

export async function deleteFamilyMember(memberId: string) {
  return prisma.familyMember.delete({
    where: { id: memberId },
  });
}
