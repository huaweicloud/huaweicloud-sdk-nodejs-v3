

export class DataobjectSearchConditionData {
    public filed?: string;
    public expression?: string;
    public value?: string;
    public constructor() { 
    }
    public withFiled(filed: string): DataobjectSearchConditionData {
        this['filed'] = filed;
        return this;
    }
    public withExpression(expression: string): DataobjectSearchConditionData {
        this['expression'] = expression;
        return this;
    }
    public withValue(value: string): DataobjectSearchConditionData {
        this['value'] = value;
        return this;
    }
}