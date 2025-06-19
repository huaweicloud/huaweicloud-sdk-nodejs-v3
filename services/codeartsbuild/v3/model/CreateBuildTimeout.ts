

export class CreateBuildTimeout {
    public limit?: string;
    public unit?: string;
    public constructor() { 
    }
    public withLimit(limit: string): CreateBuildTimeout {
        this['limit'] = limit;
        return this;
    }
    public withUnit(unit: string): CreateBuildTimeout {
        this['unit'] = unit;
        return this;
    }
}