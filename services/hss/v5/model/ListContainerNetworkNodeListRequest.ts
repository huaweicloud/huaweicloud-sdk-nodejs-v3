

export class ListContainerNetworkNodeListRequest {
    private 'cluster_id'?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'query_field'?: string;
    private 'query_value'?: string;
    public constructor(clusterId?: string, limit?: number, offset?: number) { 
        this['cluster_id'] = clusterId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withClusterId(clusterId: string): ListContainerNetworkNodeListRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListContainerNetworkNodeListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListContainerNetworkNodeListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContainerNetworkNodeListRequest {
        this['offset'] = offset;
        return this;
    }
    public withQueryField(queryField: string): ListContainerNetworkNodeListRequest {
        this['query_field'] = queryField;
        return this;
    }
    public set queryField(queryField: string  | undefined) {
        this['query_field'] = queryField;
    }
    public get queryField(): string | undefined {
        return this['query_field'];
    }
    public withQueryValue(queryValue: string): ListContainerNetworkNodeListRequest {
        this['query_value'] = queryValue;
        return this;
    }
    public set queryValue(queryValue: string  | undefined) {
        this['query_value'] = queryValue;
    }
    public get queryValue(): string | undefined {
        return this['query_value'];
    }
}