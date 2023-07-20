import { BandWidthRules } from './BandWidthRules';
import { PublicipInfoResp } from './PublicipInfoResp';


export class BandwidthRespInsert {
    private 'bandwidth_type'?: string;
    private 'charge_mode'?: BandwidthRespInsertChargeModeEnum | string;
    public id?: string;
    public name?: string;
    private 'publicip_info'?: Array<PublicipInfoResp>;
    private 'billing_info'?: string;
    private 'share_type'?: BandwidthRespInsertShareTypeEnum | string;
    public size?: number;
    private 'tenant_id'?: string;
    private 'enterprise_project_id'?: string;
    public status?: BandwidthRespInsertStatusEnum | string;
    private 'enable_bandwidth_rules'?: boolean;
    private 'rule_quota'?: number;
    private 'bandwidth_rules'?: Array<BandWidthRules>;
    public constructor() { 
    }
    public withBandwidthType(bandwidthType: string): BandwidthRespInsert {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
        return this['bandwidth_type'];
    }
    public withChargeMode(chargeMode: BandwidthRespInsertChargeModeEnum | string): BandwidthRespInsert {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: BandwidthRespInsertChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): BandwidthRespInsertChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withId(id: string): BandwidthRespInsert {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BandwidthRespInsert {
        this['name'] = name;
        return this;
    }
    public withPublicipInfo(publicipInfo: Array<PublicipInfoResp>): BandwidthRespInsert {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<PublicipInfoResp>  | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo(): Array<PublicipInfoResp> | undefined {
        return this['publicip_info'];
    }
    public withBillingInfo(billingInfo: string): BandwidthRespInsert {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withShareType(shareType: BandwidthRespInsertShareTypeEnum | string): BandwidthRespInsert {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: BandwidthRespInsertShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): BandwidthRespInsertShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withSize(size: number): BandwidthRespInsert {
        this['size'] = size;
        return this;
    }
    public withTenantId(tenantId: string): BandwidthRespInsert {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BandwidthRespInsert {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: BandwidthRespInsertStatusEnum | string): BandwidthRespInsert {
        this['status'] = status;
        return this;
    }
    public withEnableBandwidthRules(enableBandwidthRules: boolean): BandwidthRespInsert {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
        return this;
    }
    public set enableBandwidthRules(enableBandwidthRules: boolean  | undefined) {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
    }
    public get enableBandwidthRules(): boolean | undefined {
        return this['enable_bandwidth_rules'];
    }
    public withRuleQuota(ruleQuota: number): BandwidthRespInsert {
        this['rule_quota'] = ruleQuota;
        return this;
    }
    public set ruleQuota(ruleQuota: number  | undefined) {
        this['rule_quota'] = ruleQuota;
    }
    public get ruleQuota(): number | undefined {
        return this['rule_quota'];
    }
    public withBandwidthRules(bandwidthRules: Array<BandWidthRules>): BandwidthRespInsert {
        this['bandwidth_rules'] = bandwidthRules;
        return this;
    }
    public set bandwidthRules(bandwidthRules: Array<BandWidthRules>  | undefined) {
        this['bandwidth_rules'] = bandwidthRules;
    }
    public get bandwidthRules(): Array<BandWidthRules> | undefined {
        return this['bandwidth_rules'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandwidthRespInsertChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    E_95PEAK_PLUS = '95peak_plus'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthRespInsertShareTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthRespInsertStatusEnum {
    FREEZED = 'FREEZED',
    NORMAL = 'NORMAL'
}
