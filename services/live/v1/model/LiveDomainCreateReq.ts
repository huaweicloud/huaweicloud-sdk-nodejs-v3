

export class LiveDomainCreateReq {
    public domain?: string;
    private 'domain_type'?: LiveDomainCreateReqDomainTypeEnum | string;
    public region?: string;
    private 'service_area'?: LiveDomainCreateReqServiceAreaEnum | string;
    private 'enterprise_project_id'?: string;
    private 'pull_protocol'?: LiveDomainCreateReqPullProtocolEnum | string;
    public constructor(domain?: string, domainType?: string, region?: string) { 
        this['domain'] = domain;
        this['domain_type'] = domainType;
        this['region'] = region;
    }
    public withDomain(domain: string): LiveDomainCreateReq {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: LiveDomainCreateReqDomainTypeEnum | string): LiveDomainCreateReq {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: LiveDomainCreateReqDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): LiveDomainCreateReqDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withRegion(region: string): LiveDomainCreateReq {
        this['region'] = region;
        return this;
    }
    public withServiceArea(serviceArea: LiveDomainCreateReqServiceAreaEnum | string): LiveDomainCreateReq {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: LiveDomainCreateReqServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): LiveDomainCreateReqServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LiveDomainCreateReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPullProtocol(pullProtocol: LiveDomainCreateReqPullProtocolEnum | string): LiveDomainCreateReq {
        this['pull_protocol'] = pullProtocol;
        return this;
    }
    public set pullProtocol(pullProtocol: LiveDomainCreateReqPullProtocolEnum | string  | undefined) {
        this['pull_protocol'] = pullProtocol;
    }
    public get pullProtocol(): LiveDomainCreateReqPullProtocolEnum | string | undefined {
        return this['pull_protocol'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveDomainCreateReqDomainTypeEnum {
    PULL = 'pull',
    PUSH = 'push'
}
/**
    * @export
    * @enum {string}
    */
export enum LiveDomainCreateReqServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china',
    GLOBAL = 'global'
}
/**
    * @export
    * @enum {string}
    */
export enum LiveDomainCreateReqPullProtocolEnum {
    FLV_RTMP = 'flv_rtmp',
    HLS = 'hls'
}
