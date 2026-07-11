import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FamilyTreeModule } from './family-tree/family-tree.module';

@Module({
  imports: [UsersModule, FamilyTreeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

