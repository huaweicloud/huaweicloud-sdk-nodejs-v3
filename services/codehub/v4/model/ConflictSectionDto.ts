import { ConflictSectionLineDto } from './ConflictSectionLineDto';


export class ConflictSectionDto {
    public conflict?: boolean;
    public lines?: Array<ConflictSectionLineDto>;
    public id?: string;
    public constructor() { 
    }
    public withConflict(conflict: boolean): ConflictSectionDto {
        this['conflict'] = conflict;
        return this;
    }
    public withLines(lines: Array<ConflictSectionLineDto>): ConflictSectionDto {
        this['lines'] = lines;
        return this;
    }
    public withId(id: string): ConflictSectionDto {
        this['id'] = id;
        return this;
    }
}