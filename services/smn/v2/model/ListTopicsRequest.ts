

export class ListTopicsRequest {
    public offset?: number;
    public limit?: number;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'fuzzy_name'?: string;
    private 'topic_id'?: string;
    private 'fuzzy_display_name'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListTopicsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTopicsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopicsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ListTopicsRequest {
        this['name'] = name;
        return this;
    }
    public withFuzzyName(fuzzyName: string): ListTopicsRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
    public withTopicId(topicId: string): ListTopicsRequest {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withFuzzyDisplayName(fuzzyDisplayName: string): ListTopicsRequest {
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