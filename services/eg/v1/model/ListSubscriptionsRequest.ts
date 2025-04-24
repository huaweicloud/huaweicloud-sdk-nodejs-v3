

export class ListSubscriptionsRequest {
    private 'channel_id'?: string;
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public name?: string;
    private 'fuzzy_name'?: string;
    private 'connection_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withChannelId(channelId: string): ListSubscriptionsRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withOffset(offset: number): ListSubscriptionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListSubscriptionsRequest {
        this['sort'] = sort;
        return this;
    }
    public withName(name: string): ListSubscriptionsRequest {
        this['name'] = name;
        return this;
    }
    public withFuzzyName(fuzzyName: string): ListSubscriptionsRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
    public withConnectionId(connectionId: string): ListSubscriptionsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSubscriptionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}