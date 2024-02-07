import { LockInfo } from './LockInfo';
import { Tag } from './Tag';


export class ShowInternetBandwidth {
    public id?: string;
    public name?: string;
    public isp?: string;
    private 'ingress_size'?: number;
    private 'access_site'?: string;
    public size?: number;
    public description?: string;
    private 'charge_mode'?: string;
    private 'ratio_95peak'?: number;
    private 'billing_info'?: string;
    private 'freezen_info'?: string;
    private 'domain_id'?: string;
    public status?: ShowInternetBandwidthStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'is_pre_paid'?: boolean;
    public tags?: Array<Tag>;
    private 'sys_tags'?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'lock_infos'?: Array<LockInfo>;
    public constructor() { 
    }
    public withId(id: string): ShowInternetBandwidth {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowInternetBandwidth {
        this['name'] = name;
        return this;
    }
    public withIsp(isp: string): ShowInternetBandwidth {
        this['isp'] = isp;
        return this;
    }
    public withIngressSize(ingressSize: number): ShowInternetBandwidth {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withAccessSite(accessSite: string): ShowInternetBandwidth {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withSize(size: number): ShowInternetBandwidth {
        this['size'] = size;
        return this;
    }
    public withDescription(description: string): ShowInternetBandwidth {
        this['description'] = description;
        return this;
    }
    public withChargeMode(chargeMode: string): ShowInternetBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withRatio95peak(ratio95peak: number): ShowInternetBandwidth {
        this['ratio_95peak'] = ratio95peak;
        return this;
    }
    public set ratio95peak(ratio95peak: number  | undefined) {
        this['ratio_95peak'] = ratio95peak;
    }
    public get ratio95peak(): number | undefined {
        return this['ratio_95peak'];
    }
    public withBillingInfo(billingInfo: string): ShowInternetBandwidth {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withFreezenInfo(freezenInfo: string): ShowInternetBandwidth {
        this['freezen_info'] = freezenInfo;
        return this;
    }
    public set freezenInfo(freezenInfo: string  | undefined) {
        this['freezen_info'] = freezenInfo;
    }
    public get freezenInfo(): string | undefined {
        return this['freezen_info'];
    }
    public withDomainId(domainId: string): ShowInternetBandwidth {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStatus(status: ShowInternetBandwidthStatusEnum | string): ShowInternetBandwidth {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): ShowInternetBandwidth {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ShowInternetBandwidth {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withIsPrePaid(isPrePaid: boolean): ShowInternetBandwidth {
        this['is_pre_paid'] = isPrePaid;
        return this;
    }
    public set isPrePaid(isPrePaid: boolean  | undefined) {
        this['is_pre_paid'] = isPrePaid;
    }
    public get isPrePaid(): boolean | undefined {
        return this['is_pre_paid'];
    }
    public withTags(tags: Array<Tag>): ShowInternetBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<Tag>): ShowInternetBandwidth {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<Tag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<Tag> | undefined {
        return this['sys_tags'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowInternetBandwidth {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ShowInternetBandwidth {
        this['type'] = type;
        return this;
    }
    public withLockInfos(lockInfos: Array<LockInfo>): ShowInternetBandwidth {
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
export enum ShowInternetBandwidthStatusEnum {
    NORMAL = 'NORMAL',
    FREEZED = 'FREEZED'
}
