import { LockInfo } from './LockInfo';
import { Tag } from './Tag';


export class BatchCreateInternetBandwidth {
    public id?: string;
    public name?: string;
    public isp?: string;
    private 'ingress_size'?: number;
    private 'access_site'?: string;
    public size?: number;
    public description?: string;
    private 'charge_mode'?: string;
    private 'domain_id'?: string;
    public status?: BatchCreateInternetBandwidthStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'ret_status'?: string;
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'lock_infos'?: Array<LockInfo>;
    public constructor(isp?: string, accessSite?: string, size?: number) { 
        this['isp'] = isp;
        this['access_site'] = accessSite;
        this['size'] = size;
    }
    public withId(id: string): BatchCreateInternetBandwidth {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchCreateInternetBandwidth {
        this['name'] = name;
        return this;
    }
    public withIsp(isp: string): BatchCreateInternetBandwidth {
        this['isp'] = isp;
        return this;
    }
    public withIngressSize(ingressSize: number): BatchCreateInternetBandwidth {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withAccessSite(accessSite: string): BatchCreateInternetBandwidth {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withSize(size: number): BatchCreateInternetBandwidth {
        this['size'] = size;
        return this;
    }
    public withDescription(description: string): BatchCreateInternetBandwidth {
        this['description'] = description;
        return this;
    }
    public withChargeMode(chargeMode: string): BatchCreateInternetBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withDomainId(domainId: string): BatchCreateInternetBandwidth {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStatus(status: BatchCreateInternetBandwidthStatusEnum | string): BatchCreateInternetBandwidth {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): BatchCreateInternetBandwidth {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): BatchCreateInternetBandwidth {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withRetStatus(retStatus: string): BatchCreateInternetBandwidth {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): string | undefined {
        return this['ret_status'];
    }
    public withTags(tags: Array<Tag>): BatchCreateInternetBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tag>): BatchCreateInternetBandwidth {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreateInternetBandwidth {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): BatchCreateInternetBandwidth {
        this['type'] = type;
        return this;
    }
    public withLockInfos(lockInfos: Array<LockInfo>): BatchCreateInternetBandwidth {
        this['lock_infos'] = lockInfos;
        return this;
    }
    public set lockInfos(lockInfos: Array<LockInfo>  | undefined) {
        this['lock_infos'] = lockInfos;
    }
    public get lockInfos(): Array<LockInfo> | undefined {
        return this['lock_infos'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateInternetBandwidthStatusEnum {
    NORMAL = 'NORMAL',
    FREEZED = 'FREEZED'
}
