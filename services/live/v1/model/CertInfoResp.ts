

export class CertInfoResp {
    private 'play_domain'?: string;
    private 'project_id'?: string;
    private 'tenant_name'?: string;
    private 'start_time'?: string;
    private 'expire_time'?: string;
    private 'cert_type'?: number;
    private 'gm_cert_type'?: number;
    public source?: string;
    private 'cert_name'?: string;
    private 'cert_id'?: string;
    public constructor(playDomain?: string, projectId?: string, tenantName?: string, startTime?: string, expireTime?: string) { 
        this['play_domain'] = playDomain;
        this['project_id'] = projectId;
        this['tenant_name'] = tenantName;
        this['start_time'] = startTime;
        this['expire_time'] = expireTime;
    }
    public withPlayDomain(playDomain: string): CertInfoResp {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withProjectId(projectId: string): CertInfoResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTenantName(tenantName: string): CertInfoResp {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withStartTime(startTime: string): CertInfoResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withExpireTime(expireTime: string): CertInfoResp {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withCertType(certType: number): CertInfoResp {
        this['cert_type'] = certType;
        return this;
    }
    public set certType(certType: number  | undefined) {
        this['cert_type'] = certType;
    }
    public get certType(): number | undefined {
        return this['cert_type'];
    }
    public withGmCertType(gmCertType: number): CertInfoResp {
        this['gm_cert_type'] = gmCertType;
        return this;
    }
    public set gmCertType(gmCertType: number  | undefined) {
        this['gm_cert_type'] = gmCertType;
    }
    public get gmCertType(): number | undefined {
        return this['gm_cert_type'];
    }
    public withSource(source: string): CertInfoResp {
        this['source'] = source;
        return this;
    }
    public withCertName(certName: string): CertInfoResp {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertId(certId: string): CertInfoResp {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
}