

export class Subscription {
    public topic?: string;
    public type?: string;
    public expression?: string;
    public constructor() { 
    }
    public withTopic(topic: string): Subscription {
        this['topic'] = topic;
        return this;
    }
    public withType(type: string): Subscription {
        this['type'] = type;
        return this;
    }
    public withExpression(expression: string): Subscription {
        this['expression'] = expression;
        return this;
    }
}