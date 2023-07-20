

export class ModifyCollationRequestBody {
    public collation?: string;
    public constructor(collation?: string) { 
        this['collation'] = collation;
    }
    public withCollation(collation: string): ModifyCollationRequestBody {
        this['collation'] = collation;
        return this;
    }
}