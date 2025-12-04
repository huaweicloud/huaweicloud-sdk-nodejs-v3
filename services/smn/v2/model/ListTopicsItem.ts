

export class ListTopicsItem {
    private 'topic_urn'?: string;
    public name?: string;
    private 'display_name'?: string;
    private 'push_policy'?: number;
    private 'enterprise_project_id'?: string;
    private 'topic_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(topicUrn?: string, name?: string, displayName?: string, pushPolicy?: number, enterpriseProjectId?: string, topicId?: string, createTime?: string, updateTime?: string) { 
        this['topic_urn'] = topicUrn;
        this['name'] = name;
        this['display_name'] = displayName;
        this['push_policy'] = pushPolicy;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['topic_id'] = topicId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withTopicUrn(topicUrn: string): ListTopicsItem {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withName(name: string): ListTopicsItem {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): ListTopicsItem {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPushPolicy(pushPolicy: number): ListTopicsItem {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: number  | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy(): number | undefined {
        return this['push_policy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopicsItem {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTopicId(topicId: string): ListTopicsItem {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withCreateTime(createTime: string): ListTopicsItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ListTopicsItem {
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