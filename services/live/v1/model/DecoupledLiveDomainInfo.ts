

export class DecoupledLiveDomainInfo {
    public domain?: string;
    private 'domain_type'?: DecoupledLiveDomainInfoDomainTypeEnum | string;
    public vendor?: DecoupledLiveDomainInfoVendorEnum | string;
    public region?: string;
    private 'domain_cname'?: string;
    public status?: DecoupledLiveDomainInfoStatusEnum | string;
    private 'related_domain'?: string;
    private 'create_time'?: Date;
    private 'status_describe'?: string;
    private 'service_area'?: DecoupledLiveDomainInfoServiceAreaEnum | string;
    private 'enterprise_project_id'?: string;
    private 'is_ipv6'?: boolean;
    public constructor(domain?: string, domainType?: string, vendor?: string, region?: string, domainCname?: string, status?: string, relatedDomain?: string, createTime?: Date) { 
        this['domain'] = domain;
        this['domain_type'] = domainType;
        this['vendor'] = vendor;
        this['region'] = region;
        this['domain_cname'] = domainCname;
        this['status'] = status;
        this['related_domain'] = relatedDomain;
        this['create_time'] = createTime;
    }
    public withDomain(domain: string): DecoupledLiveDomainInfo {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: DecoupledLiveDomainInfoDomainTypeEnum | string): DecoupledLiveDomainInfo {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: DecoupledLiveDomainInfoDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): DecoupledLiveDomainInfoDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withVendor(vendor: DecoupledLiveDomainInfoVendorEnum | string): DecoupledLiveDomainInfo {
        this['vendor'] = vendor;
        return this;
    }
    public withRegion(region: string): DecoupledLiveDomainInfo {
        this['region'] = region;
        return this;
    }
    public withDomainCname(domainCname: string): DecoupledLiveDomainInfo {
        this['domain_cname'] = domainCname;
        return this;
    }
    public set domainCname(domainCname: string  | undefined) {
        this['domain_cname'] = domainCname;
    }
    public get domainCname(): string | undefined {
        return this['domain_cname'];
    }
    public withStatus(status: DecoupledLiveDomainInfoStatusEnum | string): DecoupledLiveDomainInfo {
        this['status'] = status;
        return this;
    }
    public withRelatedDomain(relatedDomain: string): DecoupledLiveDomainInfo {
        this['related_domain'] = relatedDomain;
        return this;
    }
    public set relatedDomain(relatedDomain: string  | undefined) {
        this['related_domain'] = relatedDomain;
    }
    public get relatedDomain(): string | undefined {
        return this['related_domain'];
    }
    public withCreateTime(createTime: Date): DecoupledLiveDomainInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withStatusDescribe(statusDescribe: string): DecoupledLiveDomainInfo {
        this['status_describe'] = statusDescribe;
        return this;
    }
    public set statusDescribe(statusDescribe: string  | undefined) {
        this['status_describe'] = statusDescribe;
    }
    public get statusDescribe(): string | undefined {
        return this['status_describe'];
    }
    public withServiceArea(serviceArea: DecoupledLiveDomainInfoServiceAreaEnum | string): DecoupledLiveDomainInfo {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: DecoupledLiveDomainInfoServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): DecoupledLiveDomainInfoServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DecoupledLiveDomainInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIsIpv6(isIpv6: boolean): DecoupledLiveDomainInfo {
        this['is_ipv6'] = isIpv6;
        return this;
    }
    public set isIpv6(isIpv6: boolean  | undefined) {
        this['is_ipv6'] = isIpv6;
    }
    public get isIpv6(): boolean | undefined {
        return this['is_ipv6'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DecoupledLiveDomainInfoDomainTypeEnum {
    PULL = 'pull',
    PUSH = 'push'
}
/**
    * @export
    * @enum {string}
    */
export enum DecoupledLiveDomainInfoVendorEnum {
    CHINANETCENTER = 'ChinaNetCenter',
    KINGSOFT = 'KingSoft',
    TENCENT = 'Tencent',
    UCDN = 'uCDN',
    TENCENTOUTSIDE = 'TencentOutside',
    DNION = 'Dnion',
    BAISHAN = 'Baishan',
    BAIDU = 'Baidu',
    ONETHING = 'Onething'
}
/**
    * @export
    * @enum {string}
    */
export enum DecoupledLiveDomainInfoStatusEnum {
    ON = 'on',
    OFF = 'off',
    CONFIGURING = 'configuring'
}
/**
    * @export
    * @enum {string}
    */
export enum DecoupledLiveDomainInfoServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china'
}
