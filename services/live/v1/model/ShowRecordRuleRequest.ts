

export class ShowRecordRuleRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowRecordRuleRequest {
        this['id'] = id;
        return this;
    }
}