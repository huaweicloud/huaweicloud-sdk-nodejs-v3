import { BandWidthRules } from './BandWidthRules';
import { PublicipInfoResp } from './PublicipInfoResp';


export class BandwidthResp {
    private 'bandwidth_type'?: string;
    private 'billing_info'?: string;
    private 'charge_mode'?: BandwidthRespChargeModeEnum | string;
    public id?: string;
    public name?: string;
    private 'publicip_info'?: Array<PublicipInfoResp>;
    private 'share_type'?: BandwidthRespShareTypeEnum | string;
    public size?: number;
    private 'tenant_id'?: string;
    private 'enterprise_project_id'?: string;
    public status?: BandwidthRespStatusEnum | string;
    private 'enable_bandwidth_rules'?: boolean;
    private 'rule_quota'?: number;
    private 'bandwidth_rules'?: Array<BandWidthRules>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'public_border_group'?: string;
    public constructor() { 
    }
    public withBandwidthType(bandwidthType: string): BandwidthResp {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
        return this['bandwidth_type'];
    }
    public withBillingInfo(billingInfo: string): BandwidthResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withChargeMode(chargeMode: BandwidthRespChargeModeEnum | string): BandwidthResp {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: BandwidthRespChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): BandwidthRespChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withId(id: string): BandwidthResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BandwidthResp {
        this['name'] = name;
        return this;
    }
    public withPublicipInfo(publicipInfo: Array<PublicipInfoResp>): BandwidthResp {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<PublicipInfoResp>  | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo(): Array<PublicipInfoResp> | undefined {
        return this['publicip_info'];
    }
    public withShareType(shareType: BandwidthRespShareTypeEnum | string): BandwidthResp {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: BandwidthRespShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): BandwidthRespShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withSize(size: number): BandwidthResp {
        this['size'] = size;
        return this;
    }
    public withTenantId(tenantId: string): BandwidthResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BandwidthResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: BandwidthRespStatusEnum | string): BandwidthResp {
        this['status'] = status;
        return this;
    }
    public withEnableBandwidthRules(enableBandwidthRules: boolean): BandwidthResp {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
        return this;
    }
    public set enableBandwidthRules(enableBandwidthRules: boolean  | undefined) {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
    }
    public get enableBandwidthRules(): boolean | undefined {
        return this['enable_bandwidth_rules'];
    }
    public withRuleQuota(ruleQuota: number): BandwidthResp {
        this['rule_quota'] = ruleQuota;
        return this;
    }
    public set ruleQuota(ruleQuota: number  | undefined) {
        this['rule_quota'] = ruleQuota;
    }
    public get ruleQuota(): number | undefined {
        return this['rule_quota'];
    }
    public withBandwidthRules(bandwidthRules: Array<BandWidthRules>): BandwidthResp {
        this['bandwidth_rules'] = bandwidthRules;
        return this;
    }
    public set bandwidthRules(bandwidthRules: Array<BandWidthRules>  | undefined) {
        this['bandwidth_rules'] = bandwidthRules;
    }
    public get bandwidthRules(): Array<BandWidthRules> | undefined {
        return this['bandwidth_rules'];
    }
    public withCreatedAt(createdAt: string): BandwidthResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): BandwidthResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): BandwidthResp {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandwidthRespChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    E_95PEAK_PLUS = '95peak_plus'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthRespShareTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthRespStatusEnum {
    FREEZED = 'FREEZED',
    NORMAL = 'NORMAL'
}
