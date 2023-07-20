

export class Sources {
    private 'domain_id'?: string;
    private 'origin_type'?: SourcesOriginTypeEnum | string;
    private 'ip_or_domain'?: string;
    private 'active_standby'?: number;
    private 'enable_obs_web_hosting'?: number;
    public constructor(originType?: string, ipOrDomain?: string, activeStandby?: number) { 
        this['origin_type'] = originType;
        this['ip_or_domain'] = ipOrDomain;
        this['active_standby'] = activeStandby;
    }
    public withDomainId(domainId: string): Sources {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOriginType(originType: SourcesOriginTypeEnum | string): Sources {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: SourcesOriginTypeEnum | string  | undefined) {
        this['origin_type'] = originType;
    }
    public get originType(): SourcesOriginTypeEnum | string | undefined {
        return this['origin_type'];
    }
    public withIpOrDomain(ipOrDomain: string): Sources {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string  | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain(): string | undefined {
        return this['ip_or_domain'];
    }
    public withActiveStandby(activeStandby: number): Sources {
        this['active_standby'] = activeStandby;
        return this;
    }
    public set activeStandby(activeStandby: number  | undefined) {
        this['active_standby'] = activeStandby;
    }
    public get activeStandby(): number | undefined {
        return this['active_standby'];
    }
    public withEnableObsWebHosting(enableObsWebHosting: number): Sources {
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
export enum SourcesOriginTypeEnum {
    IPADDR = 'ipaddr',
    DOMAIN = 'domain',
    OBS_BUCKET = 'obs_bucket'
}
