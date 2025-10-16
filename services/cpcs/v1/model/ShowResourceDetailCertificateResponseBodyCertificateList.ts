

export class ShowResourceDetailCertificateResponseBodyCertificateList {
    public name?: string;
    public id?: string;
    private 'tenant_id'?: string;
    private 'cluster_id'?: string;
    private 'server_type'?: string;
    private 'certificate_type'?: string;
    private 'algorithm_type'?: string;
    public algorithm?: string;
    private 'start_time'?: number;
    private 'expired_time'?: number;
    public issuer?: string;
    public user?: string;
    public status?: number;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withName(name: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withClusterId(clusterId: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withServerType(serverType: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withCertificateType(certificateType: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): string | undefined {
        return this['certificate_type'];
    }
    public withAlgorithmType(algorithmType: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withAlgorithm(algorithm: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['algorithm'] = algorithm;
        return this;
    }
    public withStartTime(startTime: number): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withExpiredTime(expiredTime: number): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: number  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): number | undefined {
        return this['expired_time'];
    }
    public withIssuer(issuer: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['issuer'] = issuer;
        return this;
    }
    public withUser(user: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['user'] = user;
        return this;
    }
    public withStatus(status: number): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ShowResourceDetailCertificateResponseBodyCertificateList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}