
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainResponse extends SdkResponse {
    public domain?: string;
    private 'domain_type'?: UpdateDomainResponseDomainTypeEnum | string;
    private 'domain_cname'?: string;
    public region?: string;
    public status?: UpdateDomainResponseStatusEnum | string;
    private 'create_time'?: Date;
    private 'status_describe'?: string;
    private 'service_area'?: UpdateDomainResponseServiceAreaEnum | string;
    private 'enterprise_project_id'?: string;
    private 'pull_protocol'?: UpdateDomainResponsePullProtocolEnum | string;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): UpdateDomainResponse {
        this['domain'] = domain;
        return this;
    }
    public withDomainType(domainType: UpdateDomainResponseDomainTypeEnum | string): UpdateDomainResponse {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: UpdateDomainResponseDomainTypeEnum | string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): UpdateDomainResponseDomainTypeEnum | string | undefined {
        return this['domain_type'];
    }
    public withDomainCname(domainCname: string): UpdateDomainResponse {
        this['domain_cname'] = domainCname;
        return this;
    }
    public set domainCname(domainCname: string  | undefined) {
        this['domain_cname'] = domainCname;
    }
    public get domainCname(): string | undefined {
        return this['domain_cname'];
    }
    public withRegion(region: string): UpdateDomainResponse {
        this['region'] = region;
        return this;
    }
    public withStatus(status: UpdateDomainResponseStatusEnum | string): UpdateDomainResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): UpdateDomainResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withStatusDescribe(statusDescribe: string): UpdateDomainResponse {
        this['status_describe'] = statusDescribe;
        return this;
    }
    public set statusDescribe(statusDescribe: string  | undefined) {
        this['status_describe'] = statusDescribe;
    }
    public get statusDescribe(): string | undefined {
        return this['status_describe'];
    }
    public withServiceArea(serviceArea: UpdateDomainResponseServiceAreaEnum | string): UpdateDomainResponse {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: UpdateDomainResponseServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): UpdateDomainResponseServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateDomainResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPullProtocol(pullProtocol: UpdateDomainResponsePullProtocolEnum | string): UpdateDomainResponse {
        this['pull_protocol'] = pullProtocol;
        return this;
    }
    public set pullProtocol(pullProtocol: UpdateDomainResponsePullProtocolEnum | string  | undefined) {
        this['pull_protocol'] = pullProtocol;
    }
    public get pullProtocol(): UpdateDomainResponsePullProtocolEnum | string | undefined {
        return this['pull_protocol'];
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
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china',
    GLOBAL = 'global'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDomainResponsePullProtocolEnum {
    FLV_RTMP = 'flv_rtmp',
    HLS = 'hls'
}
