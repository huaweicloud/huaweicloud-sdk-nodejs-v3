

export class DeleteRecordRuleRequest {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteRecordRuleRequest {
        this['id'] = id;
        return this;
    }
}