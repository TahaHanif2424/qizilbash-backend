export class CreateFamilyTreeDto {
  name: string;
  description?: string;
  userId: number;
}

export class MigrationStepDto {
  year: string;
  location: string;
  note: string;
}

export class PhotoDto {
  url: string;
  caption: string;
}

export class DocumentDto {
  name: string;
  type: string;
  size: string;
}

export class CreateFamilyMemberDto {
  name: string;
  lifespan: string;
  relationship: string;
  tribe: string;
  originCity: string;
  bio?: string;
  migrationHistory?: MigrationStepDto[];
  photos?: PhotoDto[];
  documents?: DocumentDto[];
  parentId?: string;
}

export class UpdateFamilyMemberDto {
  name?: string;
  lifespan?: string;
  relationship?: string;
  tribe?: string;
  originCity?: string;
  bio?: string;
  migrationHistory?: MigrationStepDto[];
  photos?: PhotoDto[];
  documents?: DocumentDto[];
  parentId?: string;
}
