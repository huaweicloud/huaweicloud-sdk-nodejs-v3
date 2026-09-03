

export class SmnTopicInfo {
    private 'topic_urn'?: string;
    public name?: string;
    private 'display_name'?: string;
    private 'push_policy'?: string;
    private 'enterprise_project_id'?: string;
    private 'topic_id'?: string;
    public constructor() { 
    }
    public withTopicUrn(topicUrn: string): SmnTopicInfo {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withName(name: string): SmnTopicInfo {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): SmnTopicInfo {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPushPolicy(pushPolicy: string): SmnTopicInfo {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: string  | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy(): string | undefined {
        return this['push_policy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SmnTopicInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTopicId(topicId: string): SmnTopicInfo {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
}