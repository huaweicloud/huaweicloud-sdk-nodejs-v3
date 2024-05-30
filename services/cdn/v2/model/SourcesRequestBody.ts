

export class SourcesRequestBody {
    private 'domain_id'?: string;
    private 'ip_or_domain'?: string;
    private 'origin_type'?: SourcesRequestBodyOriginTypeEnum | string;
    private 'obs_bucket_type'?: string;
    private 'active_standby'?: number;
    private 'enable_obs_web_hosting'?: number;
    public constructor(ipOrDomain?: string, originType?: string, activeStandby?: number) { 
        this['ip_or_domain'] = ipOrDomain;
        this['origin_type'] = originType;
        this['active_standby'] = activeStandby;
    }
    public withDomainId(domainId: string): SourcesRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIpOrDomain(ipOrDomain: string): SourcesRequestBody {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string  | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain(): string | undefined {
        return this['ip_or_domain'];
    }
    public withOriginType(originType: SourcesRequestBodyOriginTypeEnum | string): SourcesRequestBody {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: SourcesRequestBodyOriginTypeEnum | string  | undefined) {
        this['origin_type'] = originType;
    }
    public get originType(): SourcesRequestBodyOriginTypeEnum | string | undefined {
        return this['origin_type'];
    }
    public withObsBucketType(obsBucketType: string): SourcesRequestBody {
        this['obs_bucket_type'] = obsBucketType;
        return this;
    }
    public set obsBucketType(obsBucketType: string  | undefined) {
        this['obs_bucket_type'] = obsBucketType;
    }
    public get obsBucketType(): string | undefined {
        return this['obs_bucket_type'];
    }
    public withActiveStandby(activeStandby: number): SourcesRequestBody {
        this['active_standby'] = activeStandby;
        return this;
    }
    public set activeStandby(activeStandby: number  | undefined) {
        this['active_standby'] = activeStandby;
    }
    public get activeStandby(): number | undefined {
        return this['active_standby'];
    }
    public withEnableObsWebHosting(enableObsWebHosting: number): SourcesRequestBody {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
        return this;
    }
    public set enableObsWebHosting(enableObsWebHosting: number  | undefined) {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
    }
    public get enableObsWebHosting(): number | undefined {
        return this['enable_obs_web_hosting'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourcesRequestBodyOriginTypeEnum {
    IPADDR = 'ipaddr',
    DOMAIN = 'domain',
    OBS_BUCKET = 'obs_bucket'
}
