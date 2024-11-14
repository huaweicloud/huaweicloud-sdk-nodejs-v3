

export class DeleteDbCacheRuleRequestBody {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteDbCacheRuleRequestBody {
        this['id'] = id;
        return this;
    }
}