

export class SubscriptionTagInfo {
    public key?: string;
    public value?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withKey(key: string): SubscriptionTagInfo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SubscriptionTagInfo {
        this['value'] = value;
        return this;
    }
    public withCreateTime(createTime: number): SubscriptionTagInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): SubscriptionTagInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}