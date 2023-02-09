

export class Sources {
    private 'domain_id'?: string | undefined;
    private 'ip_or_domain': string | undefined;
    private 'origin_type': SourcesOriginTypeEnum | undefined;
    private 'active_standby': number | undefined;
    private 'enable_obs_web_hosting'?: number | undefined;
    public constructor(ipOrDomain?: any, originType?: any, activeStandby?: any) { 
        this['ip_or_domain'] = ipOrDomain;
        this['origin_type'] = originType;
        this['active_standby'] = activeStandby;
    }
    public withDomainId(domainId: string): Sources {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withIpOrDomain(ipOrDomain: string): Sources {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain() {
        return this['ip_or_domain'];
    }
    public withOriginType(originType: SourcesOriginTypeEnum): Sources {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: SourcesOriginTypeEnum | undefined) {
        this['origin_type'] = originType;
    }
    public get originType() {
        return this['origin_type'];
    }
    public withActiveStandby(activeStandby: number): Sources {
        this['active_standby'] = activeStandby;
        return this;
    }
    public set activeStandby(activeStandby: number | undefined) {
        this['active_standby'] = activeStandby;
    }
    public get activeStandby() {
        return this['active_standby'];
    }
    public withEnableObsWebHosting(enableObsWebHosting: number): Sources {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
        return this;
    }
    public set enableObsWebHosting(enableObsWebHosting: number | undefined) {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
    }
    public get enableObsWebHosting() {
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
