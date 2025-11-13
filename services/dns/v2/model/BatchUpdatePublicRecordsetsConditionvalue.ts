

export class BatchUpdatePublicRecordsetsConditionvalue {
    public condition?: string;
    public value?: string;
    public constructor(condition?: string) { 
        this['condition'] = condition;
    }
    public withCondition(condition: string): BatchUpdatePublicRecordsetsConditionvalue {
        this['condition'] = condition;
        return this;
    }
    public withValue(value: string): BatchUpdatePublicRecordsetsConditionvalue {
        this['value'] = value;
        return this;
    }
}