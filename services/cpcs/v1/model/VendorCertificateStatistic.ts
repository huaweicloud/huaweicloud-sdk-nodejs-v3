

export class VendorCertificateStatistic {
    public count?: number;
    private 'tenant_id'?: string;
    private 'cluster_id'?: string;
    private 'server_type'?: string;
    private 'certificate_type'?: number;
    private 'algorithm_type'?: number;
    public constructor() { 
    }
    public withCount(count: number): VendorCertificateStatistic {
        this['count'] = count;
        return this;
    }
    public withTenantId(tenantId: string): VendorCertificateStatistic {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withClusterId(clusterId: string): VendorCertificateStatistic {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withServerType(serverType: string): VendorCertificateStatistic {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withCertificateType(certificateType: number): VendorCertificateStatistic {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: number  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): number | undefined {
        return this['certificate_type'];
    }
    public withAlgorithmType(algorithmType: number): VendorCertificateStatistic {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: number  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): number | undefined {
        return this['algorithm_type'];
    }
}