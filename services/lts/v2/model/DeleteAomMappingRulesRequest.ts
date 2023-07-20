

export class DeleteAomMappingRulesRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteAomMappingRulesRequest {
        this['id'] = id;
        return this;
    }
}