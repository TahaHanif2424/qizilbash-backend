import { Module } from '@nestjs/common';
import { FamilyTreeController } from './family-tree.controller';

@Module({
  controllers: [FamilyTreeController],
})
export class FamilyTreeModule {}
