

export class ListTopicsItem {
    private 'topic_urn': string | undefined;
    public name: string;
    private 'display_name': string | undefined;
    private 'push_policy': number | undefined;
    private 'enterprise_project_id': string | undefined;
    public constructor(topicUrn?: any, name?: any, displayName?: any, pushPolicy?: any, enterpriseProjectId?: any) { 
        this['topic_urn'] = topicUrn;
        this['name'] = name;
        this['display_name'] = displayName;
        this['push_policy'] = pushPolicy;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withTopicUrn(topicUrn: string): ListTopicsItem {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
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
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withPushPolicy(pushPolicy: number): ListTopicsItem {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: number | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy() {
        return this['push_policy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopicsItem {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}