

export class ListTopicsWithAssociatedResourcesRequest {
    public offset?: number;
    public limit?: number;
    private 'topic_id'?: string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'fuzzy_name'?: string;
    private 'fuzzy_display_name'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListTopicsWithAssociatedResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTopicsWithAssociatedResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withTopicId(topicId: string): ListTopicsWithAssociatedResourcesRequest {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopicsWithAssociatedResourcesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ListTopicsWithAssociatedResourcesRequest {
        this['name'] = name;
        return this;
    }
    public withFuzzyName(fuzzyName: string): ListTopicsWithAssociatedResourcesRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
    public withFuzzyDisplayName(fuzzyDisplayName: string): ListTopicsWithAssociatedResourcesRequest {
        this['fuzzy_display_name'] = fuzzyDisplayName;
        return this;
    }
    public set fuzzyDisplayName(fuzzyDisplayName: string  | undefined) {
        this['fuzzy_display_name'] = fuzzyDisplayName;
    }
    public get fuzzyDisplayName(): string | undefined {
        return this['fuzzy_display_name'];
    }
}