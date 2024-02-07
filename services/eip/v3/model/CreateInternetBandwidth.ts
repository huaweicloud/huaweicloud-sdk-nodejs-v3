import { LockInfo } from './LockInfo';
import { Tag } from './Tag';


export class CreateInternetBandwidth {
    public id?: string;
    public name?: string;
    private 'ingress_size'?: number;
    public isp?: string;
    private 'access_site'?: string;
    public size?: number;
    public description?: string;
    private 'charge_mode'?: string;
    private 'ratio_95peak'?: number;
    private 'freezen_info'?: string;
    private 'domain_id'?: string;
    private 'billing_info'?: string;
    public status?: CreateInternetBandwidthStatusEnum | string;
    private 'is_pre_paid'?: boolean;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'lock_infos'?: Array<LockInfo>;
    public constructor(isp?: string, accessSite?: string, size?: number, chargeMode?: string) { 
        this['isp'] = isp;
        this['access_site'] = accessSite;
        this['size'] = size;
        this['charge_mode'] = chargeMode;
    }
    public withId(id: string): CreateInternetBandwidth {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateInternetBandwidth {
        this['name'] = name;
        return this;
    }
    public withIngressSize(ingressSize: number): CreateInternetBandwidth {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withIsp(isp: string): CreateInternetBandwidth {
        this['isp'] = isp;
        return this;
    }
    public withAccessSite(accessSite: string): CreateInternetBandwidth {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withSize(size: number): CreateInternetBandwidth {
        this['size'] = size;
        return this;
    }
    public withDescription(description: string): CreateInternetBandwidth {
        this['description'] = description;
        return this;
    }
    public withChargeMode(chargeMode: string): CreateInternetBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withRatio95peak(ratio95peak: number): CreateInternetBandwidth {
        this['ratio_95peak'] = ratio95peak;
        return this;
    }
    public set ratio95peak(ratio95peak: number  | undefined) {
        this['ratio_95peak'] = ratio95peak;
    }
    public get ratio95peak(): number | undefined {
        return this['ratio_95peak'];
    }
    public withFreezenInfo(freezenInfo: string): CreateInternetBandwidth {
        this['freezen_info'] = freezenInfo;
        return this;
    }
    public set freezenInfo(freezenInfo: string  | undefined) {
        this['freezen_info'] = freezenInfo;
    }
    public get freezenInfo(): string | undefined {
        return this['freezen_info'];
    }
    public withDomainId(domainId: string): CreateInternetBandwidth {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBillingInfo(billingInfo: string): CreateInternetBandwidth {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withStatus(status: CreateInternetBandwidthStatusEnum | string): CreateInternetBandwidth {
        this['status'] = status;
        return this;
    }
    public withIsPrePaid(isPrePaid: boolean): CreateInternetBandwidth {
        this['is_pre_paid'] = isPrePaid;
        return this;
    }
    public set isPrePaid(isPrePaid: boolean  | undefined) {
        this['is_pre_paid'] = isPrePaid;
    }
    public get isPrePaid(): boolean | undefined {
        return this['is_pre_paid'];
    }
    public withCreatedAt(createdAt: Date): CreateInternetBandwidth {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CreateInternetBandwidth {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): CreateInternetBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tag>): CreateInternetBandwidth {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInternetBandwidth {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): CreateInternetBandwidth {
        this['type'] = type;
        return this;
    }
    public withLockInfos(lockInfos: Array<LockInfo>): CreateInternetBandwidth {
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
export enum CreateInternetBandwidthStatusEnum {
    NORMAL = 'NORMAL',
    FREEZED = 'FREEZED'
}
