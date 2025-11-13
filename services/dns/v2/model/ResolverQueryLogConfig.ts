

export class ResolverQueryLogConfig {
    public id?: string;
    private 'lts_group_id'?: string;
    private 'lts_topic_id'?: string;
    private 'vpc_ids'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): ResolverQueryLogConfig {
        this['id'] = id;
        return this;
    }
    public withLtsGroupId(ltsGroupId: string): ResolverQueryLogConfig {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsTopicId(ltsTopicId: string): ResolverQueryLogConfig {
        this['lts_topic_id'] = ltsTopicId;
        return this;
    }
    public set ltsTopicId(ltsTopicId: string  | undefined) {
        this['lts_topic_id'] = ltsTopicId;
    }
    public get ltsTopicId(): string | undefined {
        return this['lts_topic_id'];
    }
    public withVpcIds(vpcIds: Array<string>): ResolverQueryLogConfig {
        this['vpc_ids'] = vpcIds;
        return this;
    }
    public set vpcIds(vpcIds: Array<string>  | undefined) {
        this['vpc_ids'] = vpcIds;
    }
    public get vpcIds(): Array<string> | undefined {
        return this['vpc_ids'];
    }
}