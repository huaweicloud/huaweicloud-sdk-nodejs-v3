

export class ShowStatisticResourceResponseBodyDatapoints {
    public data?: number;
    public count?: number;
    private 'api_name'?: string;
    private 'tenant_id'?: string;
    private 'cluster_id'?: string;
    private 'server_type'?: string;
    public constructor() { 
    }
    public withData(data: number): ShowStatisticResourceResponseBodyDatapoints {
        this['data'] = data;
        return this;
    }
    public withCount(count: number): ShowStatisticResourceResponseBodyDatapoints {
        this['count'] = count;
        return this;
    }
    public withApiName(apiName: string): ShowStatisticResourceResponseBodyDatapoints {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withTenantId(tenantId: string): ShowStatisticResourceResponseBodyDatapoints {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withClusterId(clusterId: string): ShowStatisticResourceResponseBodyDatapoints {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withServerType(serverType: string): ShowStatisticResourceResponseBodyDatapoints {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
}