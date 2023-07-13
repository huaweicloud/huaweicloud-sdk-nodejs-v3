
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainResponse extends SdkResponse {
    public domain?: string;
    private 'domain_type'?: CreateDomainResponseDomainTypeEnum | undefined;
    private 'domain_cname'?: string | undefined;
    public region?: string;
    public status?: CreateDomainResponseStatusEnum;
    private 'create_time'?: Date | undefined;
    private 'status_describe'?: string | undefined;
    private 'service_area'?: CreateDomainResponseServiceAreaEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): CreateDomainResponse {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: CreateDomainResponseDomainTypeEnum): CreateDomainResponse {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: CreateDomainResponseDomainTypeEnum | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType() {
        return this['domain_type'];
    }
    public withDomainCname(domainCname: string): CreateDomainResponse {
        this['domain_cname'] = domainCname;
        return this;
    }
    public set domainCname(domainCname: string | undefined) {
        this['domain_cname'] = domainCname;
    }
    public get domainCname() {
        return this['domain_cname'];
    }
    public withRegion(region: string): CreateDomainResponse {
        this['region'] = region;
        return this;
    }
    public withStatus(status: CreateDomainResponseStatusEnum): CreateDomainResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): CreateDomainResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withStatusDescribe(statusDescribe: string): CreateDomainResponse {
        this['status_describe'] = statusDescribe;
        return this;
    }
    public set statusDescribe(statusDescribe: string | undefined) {
        this['status_describe'] = statusDescribe;
    }
    public get statusDescribe() {
        return this['status_describe'];
    }
    public withServiceArea(serviceArea: CreateDomainResponseServiceAreaEnum): CreateDomainResponse {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: CreateDomainResponseServiceAreaEnum | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDomainResponse {
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
export enum CreateDomainResponseDomainTypeEnum {
    PULL = 'pull',
    PUSH = 'push'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDomainResponseStatusEnum {
    ON = 'on',
    OFF = 'off',
    CONFIGURING = 'configuring',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDomainResponseServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china'
}
