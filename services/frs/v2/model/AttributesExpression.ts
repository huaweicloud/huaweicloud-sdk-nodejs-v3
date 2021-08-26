

export class AttributesExpression {
    public type?: string;
    public probability?: number;
    public constructor() { 
    }
    public withType(type: string): AttributesExpression {
        this['type'] = type;
        return this;
    }
    public withProbability(probability: number): AttributesExpression {
        this['probability'] = probability;
        return this;
    }
}