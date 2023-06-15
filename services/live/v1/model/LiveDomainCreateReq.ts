

export class LiveDomainCreateReq {
    public domain: string;
    private 'domain_type': LiveDomainCreateReqDomainTypeEnum | undefined;
    public region: string;
    private 'service_area'?: LiveDomainCreateReqServiceAreaEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(domain?: any, domainType?: any, region?: any) { 
        this['domain'] = domain;
        this['domain_type'] = domainType;
        this['region'] = region;
    }
    public withDomain(domain: string): LiveDomainCreateReq {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: LiveDomainCreateReqDomainTypeEnum): LiveDomainCreateReq {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: LiveDomainCreateReqDomainTypeEnum | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType() {
        return this['domain_type'];
    }
    public withRegion(region: string): LiveDomainCreateReq {
        this['region'] = region;
        return this;
    }
    public withServiceArea(serviceArea: LiveDomainCreateReqServiceAreaEnum): LiveDomainCreateReq {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: LiveDomainCreateReqServiceAreaEnum | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LiveDomainCreateReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
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
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china'
}
