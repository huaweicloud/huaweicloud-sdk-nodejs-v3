

export class SourceWithPort {
    private 'domain_id'?: string | undefined;
    private 'ip_or_domain': string | undefined;
    private 'origin_type': SourceWithPortOriginTypeEnum | undefined;
    private 'active_standby': number | undefined;
    private 'enable_obs_web_hosting'?: number | undefined;
    private 'http_port'?: number | undefined;
    private 'https_port'?: number | undefined;
    public constructor(ipOrDomain?: any, originType?: any, activeStandby?: any) { 
        this['ip_or_domain'] = ipOrDomain;
        this['origin_type'] = originType;
        this['active_standby'] = activeStandby;
    }
    public withDomainId(domainId: string): SourceWithPort {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withIpOrDomain(ipOrDomain: string): SourceWithPort {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain() {
        return this['ip_or_domain'];
    }
    public withOriginType(originType: SourceWithPortOriginTypeEnum): SourceWithPort {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: SourceWithPortOriginTypeEnum | undefined) {
        this['origin_type'] = originType;
    }
    public get originType() {
        return this['origin_type'];
    }
    public withActiveStandby(activeStandby: number): SourceWithPort {
        this['active_standby'] = activeStandby;
        return this;
    }
    public set activeStandby(activeStandby: number | undefined) {
        this['active_standby'] = activeStandby;
    }
    public get activeStandby() {
        return this['active_standby'];
    }
    public withEnableObsWebHosting(enableObsWebHosting: number): SourceWithPort {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
        return this;
    }
    public set enableObsWebHosting(enableObsWebHosting: number | undefined) {
        this['enable_obs_web_hosting'] = enableObsWebHosting;
    }
    public get enableObsWebHosting() {
        return this['enable_obs_web_hosting'];
    }
    public withHttpPort(httpPort: number): SourceWithPort {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort() {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): SourceWithPort {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort() {
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
