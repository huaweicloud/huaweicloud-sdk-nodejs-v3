

export class TopicAccessPolicyAttribute {
    private 'access_policy'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withAccessPolicy(accessPolicy: string): TopicAccessPolicyAttribute {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: string  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): string | undefined {
        return this['access_policy'];
    }
    public withCreateTime(createTime: string): TopicAccessPolicyAttribute {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): TopicAccessPolicyAttribute {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}