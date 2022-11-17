

export class UpdateTopicAttributeRequestBody {
    public value: string;
    public constructor(value?: any) { 
        this['value'] = value;
    }
    public withValue(value: string): UpdateTopicAttributeRequestBody {
        this['value'] = value;
        return this;
    }
}