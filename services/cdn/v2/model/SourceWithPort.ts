

export class SourceWithPort {
    private 'domain_id'?: string;
    private 'ip_or_domain'?: string;
    private 'origin_type'?: SourceWithPortOriginTypeEnum | string;
    private 'obs_bucket_type'?: string;
    private 'active_standby'?: number;
    private 'enable_obs_web_hosting'?: number;
    private 'http_port'?: number;
    private 'https_port'?: number;
    public constructor(ipOrDomain?: string, originType?: string, activeStandby?: number) { 
        this['ip_or_domain'] = ipOrDomain;
        this['origin_type'] = originType;
        this['active_standby'] = activeStandby;
    }
    public withDomainId(domainId: string): SourceWithPort {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIpOrDomain(ipOrDomain: string): SourceWithPort {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string  | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain(): string | undefined {
        return this['ip_or_domain'];
    }
    public withOriginType(originType: SourceWithPortOriginTypeEnum | string): SourceWithPort {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: SourceWithPortOriginTypeEnum | string  | undefined) {
        this['origin_type'] = originType;
    }
    public get originType(): SourceWithPortOriginTypeEnum | string | undefined {
        return this['origin_type'];
    }
    public withObsBucketType(obsBucketType: string): SourceWithPort {
        this['obs_bucket_type'] = obsBucketType;
        return this;
    }
    public set obsBucketType(obsBucketType: string  | undefined) {
        this['obs_bucket_type'] = obsBucketType;
    }
    public get obsBucketType(): string | undefined {
        return this['obs_bucket_type'];
    }
    public withActiveStandby(activeStandby: number): SourceWithPort {
        this['active_standby'] = activeStandby;
        return this;
    }
    public set activeStandby(activeStandby: number  | undefined) {
        this['active_standby'] = activeStandby;
    }
    public get activeStandby(): number | undefined {
        return this['active_standby'];
    }
    public withEnableObsWebHosting(enableObsWebHosting: number): SourceWithPort {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
        return this;
    }
    public set enableObsWebHosting(enableObsWebHosting: number  | undefined) {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
    }
    public get enableObsWebHosting(): number | undefined {
        return this['enable_obs_web_hosting'];
    }
    public withHttpPort(httpPort: number): SourceWithPort {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number  | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort(): number | undefined {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): SourceWithPort {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number  | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort(): number | undefined {
        return this['https_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceWithPortOriginTypeEnum {
    IPADDR = 'ipaddr',
    DOMAIN = 'domain',
    OBS_BUCKET = 'obs_bucket'
}
