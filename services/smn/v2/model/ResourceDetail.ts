

export class ResourceDetail {
    private 'enterprise_project_id'?: string;
    public detailId?: string;
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    public constructor(enterpriseProjectId?: string, detailId?: string, topicUrn?: string, displayName?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['detailId'] = detailId;
        this['topic_urn'] = topicUrn;
        this['display_name'] = displayName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ResourceDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDetailId(detailId: string): ResourceDetail {
        this['detailId'] = detailId;
        return this;
    }
    public withTopicUrn(topicUrn: string): ResourceDetail {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): ResourceDetail {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}