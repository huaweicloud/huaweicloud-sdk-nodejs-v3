
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainResponse extends SdkResponse {
    public domain?: string;
    private 'domain_type'?: UpdateDomainResponseDomainTypeEnum | undefined;
    private 'domain_cname'?: string | undefined;
    public region?: string;
    public status?: UpdateDomainResponseStatusEnum;
    private 'create_time'?: Date | undefined;
    private 'status_describe'?: string | undefined;
    private 'service_area'?: UpdateDomainResponseServiceAreaEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): UpdateDomainResponse {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: UpdateDomainResponseDomainTypeEnum): UpdateDomainResponse {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: UpdateDomainResponseDomainTypeEnum | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType() {
        return this['domain_type'];
    }
    public withDomainCname(domainCname: string): UpdateDomainResponse {
        this['domain_cname'] = domainCname;
        return this;
    }
    public set domainCname(domainCname: string | undefined) {
        this['domain_cname'] = domainCname;
    }
    public get domainCname() {
        return this['domain_cname'];
    }
    public withRegion(region: string): UpdateDomainResponse {
        this['region'] = region;
        return this;
    }
    public withStatus(status: UpdateDomainResponseStatusEnum): UpdateDomainResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): UpdateDomainResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withStatusDescribe(statusDescribe: string): UpdateDomainResponse {
        this['status_describe'] = statusDescribe;
        return this;
    }
    public set statusDescribe(statusDescribe: string | undefined) {
        this['status_describe'] = statusDescribe;
    }
    public get statusDescribe() {
        return this['status_describe'];
    }
    public withServiceArea(serviceArea: UpdateDomainResponseServiceAreaEnum): UpdateDomainResponse {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: UpdateDomainResponseServiceAreaEnum | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateDomainResponse {
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
export enum UpdateDomainResponseDomainTypeEnum {
    PULL = 'pull',
    PUSH = 'push'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDomainResponseStatusEnum {
    ON = 'on',
    OFF = 'off',
    CONFIGURING = 'configuring',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDomainResponseServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china'
}
