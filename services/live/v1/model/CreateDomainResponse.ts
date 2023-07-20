
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainResponse extends SdkResponse {
    public domain?: string;
    private 'domain_type'?: CreateDomainResponseDomainTypeEnum | string;
    private 'domain_cname'?: string;
    public region?: string;
    public status?: CreateDomainResponseStatusEnum | string;
    private 'create_time'?: Date;
    private 'status_describe'?: string;
    private 'service_area'?: CreateDomainResponseServiceAreaEnum | string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): CreateDomainResponse {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: CreateDomainResponseDomainTypeEnum | string): CreateDomainResponse {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: CreateDomainResponseDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): CreateDomainResponseDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withDomainCname(domainCname: string): CreateDomainResponse {
        this['domain_cname'] = domainCname;
        return this;
    }
    public set domainCname(domainCname: string  | undefined) {
        this['domain_cname'] = domainCname;
    }
    public get domainCname(): string | undefined {
        return this['domain_cname'];
    }
    public withRegion(region: string): CreateDomainResponse {
        this['region'] = region;
        return this;
    }
    public withStatus(status: CreateDomainResponseStatusEnum | string): CreateDomainResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): CreateDomainResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withStatusDescribe(statusDescribe: string): CreateDomainResponse {
        this['status_describe'] = statusDescribe;
        return this;
    }
    public set statusDescribe(statusDescribe: string  | undefined) {
        this['status_describe'] = statusDescribe;
    }
    public get statusDescribe(): string | undefined {
        return this['status_describe'];
    }
    public withServiceArea(serviceArea: CreateDomainResponseServiceAreaEnum | string): CreateDomainResponse {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: CreateDomainResponseServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): CreateDomainResponseServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDomainResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
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
