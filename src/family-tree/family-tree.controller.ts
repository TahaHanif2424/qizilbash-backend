import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  CreateFamilyTreeDto,
  CreateFamilyMemberDto,
  UpdateFamilyMemberDto,
} from './dto/family-tree.dto';
import {
  createFamilyTree,
  getFamilyTreesByUser,
  getFamilyTreeById,
  addFamilyMember,
  updateFamilyMember,
  deleteFamilyMember,
} from './function';

@Controller('family-trees')
export class FamilyTreeController {
  @Post()
  createTree(@Body() createFamilyTreeDto: CreateFamilyTreeDto) {
    return createFamilyTree(createFamilyTreeDto);
  }

  @Get('user/:userId')
  getUserTrees(@Param('userId') userId: string) {
    return getFamilyTreesByUser(+userId);
  }

  @Get(':id')
  getTree(@Param('id') id: string) {
    return getFamilyTreeById(id);
  }

  @Post(':id/members')
  addMember(
    @Param('id') treeId: string,
    @Body() createFamilyMemberDto: CreateFamilyMemberDto,
  ) {
    return addFamilyMember(treeId, createFamilyMemberDto);
  }

  @Put('members/:memberId')
  updateMember(
    @Param('memberId') memberId: string,
    @Body() updateFamilyMemberDto: UpdateFamilyMemberDto,
  ) {
    return updateFamilyMember(memberId, updateFamilyMemberDto);
  }

  @Delete('members/:memberId')
  removeMember(@Param('memberId') memberId: string) {
    return deleteFamilyMember(memberId);
  }
}
