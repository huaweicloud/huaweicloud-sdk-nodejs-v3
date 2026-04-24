

export class UpdateSubscriptionInfoReq {
    public name?: string;
    public description?: string;
    private 'consume_time'?: number;
    public constructor() { 
    }
    public withName(name: string): UpdateSubscriptionInfoReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSubscriptionInfoReq {
        this['description'] = description;
        return this;
    }
    public withConsumeTime(consumeTime: number): UpdateSubscriptionInfoReq {
        this['consume_time'] = consumeTime;
        return this;
    }
    public set consumeTime(consumeTime: number  | undefined) {
        this['consume_time'] = consumeTime;
    }
    public get consumeTime(): number | undefined {
        return this['consume_time'];
    }
}