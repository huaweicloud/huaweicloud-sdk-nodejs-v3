

export class DeleteWatermarkRuleRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteWatermarkRuleRequest {
        this['id'] = id;
        return this;
    }
}