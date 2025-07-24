

export class AssociateDefectInfoVo {
    public associate?: boolean;
    private 'associate_count'?: number;
    public constructor() { 
    }
    public withAssociate(associate: boolean): AssociateDefectInfoVo {
        this['associate'] = associate;
        return this;
    }
    public withAssociateCount(associateCount: number): AssociateDefectInfoVo {
        this['associate_count'] = associateCount;
        return this;
    }
    public set associateCount(associateCount: number  | undefined) {
        this['associate_count'] = associateCount;
    }
    public get associateCount(): number | undefined {
        return this['associate_count'];
    }
}