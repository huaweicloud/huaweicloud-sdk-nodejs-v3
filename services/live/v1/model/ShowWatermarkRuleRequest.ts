

export class ShowWatermarkRuleRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowWatermarkRuleRequest {
        this['id'] = id;
        return this;
    }
}