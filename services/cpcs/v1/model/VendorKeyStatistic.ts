

export class VendorKeyStatistic {
    private 'total_count'?: number;
    private 'valid_count'?: number;
    private 'invalid_count'?: number;
    private 'tenant_id'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'server_type'?: string;
    public algorithm?: string;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): VendorKeyStatistic {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withValidCount(validCount: number): VendorKeyStatistic {
        this['valid_count'] = validCount;
        return this;
    }
    public set validCount(validCount: number  | undefined) {
        this['valid_count'] = validCount;
    }
    public get validCount(): number | undefined {
        return this['valid_count'];
    }
    public withInvalidCount(invalidCount: number): VendorKeyStatistic {
        this['invalid_count'] = invalidCount;
        return this;
    }
    public set invalidCount(invalidCount: number  | undefined) {
        this['invalid_count'] = invalidCount;
    }
    public get invalidCount(): number | undefined {
        return this['invalid_count'];
    }
    public withTenantId(tenantId: string): VendorKeyStatistic {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withClusterId(clusterId: string): VendorKeyStatistic {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): VendorKeyStatistic {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withServerType(serverType: string): VendorKeyStatistic {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withAlgorithm(algorithm: string): VendorKeyStatistic {
        this['algorithm'] = algorithm;
        return this;
    }
}