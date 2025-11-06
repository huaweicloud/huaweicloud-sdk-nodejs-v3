

export class ConflictSectionLineMetaDataDto {
    private 'old_pos'?: number;
    private 'new_pos'?: number;
    public constructor() { 
    }
    public withOldPos(oldPos: number): ConflictSectionLineMetaDataDto {
        this['old_pos'] = oldPos;
        return this;
    }
    public set oldPos(oldPos: number  | undefined) {
        this['old_pos'] = oldPos;
    }
    public get oldPos(): number | undefined {
        return this['old_pos'];
    }
    public withNewPos(newPos: number): ConflictSectionLineMetaDataDto {
        this['new_pos'] = newPos;
        return this;
    }
    public set newPos(newPos: number  | undefined) {
        this['new_pos'] = newPos;
    }
    public get newPos(): number | undefined {
        return this['new_pos'];
    }
}