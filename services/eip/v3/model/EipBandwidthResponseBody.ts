import { BandWidthRules } from './BandWidthRules';
import { PublicipInfoResponseBody } from './PublicipInfoResponseBody';


export class EipBandwidthResponseBody {
    private 'admin_state'?: string;
    private 'ingress_size'?: number;
    private 'rule_quota'?: number;
    private 'ratio_95peak_plus'?: number;
    private 'enable_bandwidth_rules'?: boolean;
    private 'bandwidth_rules'?: Array<BandWidthRules>;
    private 'public_border_group'?: string;
    private 'bandwidth_type'?: string;
    public billinginfo?: string;
    public id?: string;
    public name?: string;
    private 'publicip_info'?: Array<PublicipInfoResponseBody>;
    public type?: EipBandwidthResponseBodyTypeEnum | string;
    public size?: number;
    private 'tenant_id'?: string;
    public tags?: Array<string>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withAdminState(adminState: string): EipBandwidthResponseBody {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: string  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): string | undefined {
        return this['admin_state'];
    }
    public withIngressSize(ingressSize: number): EipBandwidthResponseBody {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withRuleQuota(ruleQuota: number): EipBandwidthResponseBody {
        this['rule_quota'] = ruleQuota;
        return this;
    }
    public set ruleQuota(ruleQuota: number  | undefined) {
        this['rule_quota'] = ruleQuota;
    }
    public get ruleQuota(): number | undefined {
        return this['rule_quota'];
    }
    public withRatio95peakPlus(ratio95peakPlus: number): EipBandwidthResponseBody {
        this['ratio_95peak_plus'] = ratio95peakPlus;
        return this;
    }
    public set ratio95peakPlus(ratio95peakPlus: number  | undefined) {
        this['ratio_95peak_plus'] = ratio95peakPlus;
    }
    public get ratio95peakPlus(): number | undefined {
        return this['ratio_95peak_plus'];
    }
    public withEnableBandwidthRules(enableBandwidthRules: boolean): EipBandwidthResponseBody {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
        return this;
    }
    public set enableBandwidthRules(enableBandwidthRules: boolean  | undefined) {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
    }
    public get enableBandwidthRules(): boolean | undefined {
        return this['enable_bandwidth_rules'];
    }
    public withBandwidthRules(bandwidthRules: Array<BandWidthRules>): EipBandwidthResponseBody {
        this['bandwidth_rules'] = bandwidthRules;
        return this;
    }
    public set bandwidthRules(bandwidthRules: Array<BandWidthRules>  | undefined) {
        this['bandwidth_rules'] = bandwidthRules;
    }
    public get bandwidthRules(): Array<BandWidthRules> | undefined {
        return this['bandwidth_rules'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): EipBandwidthResponseBody {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withBandwidthType(bandwidthType: string): EipBandwidthResponseBody {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
        return this['bandwidth_type'];
    }
    public withBillinginfo(billinginfo: string): EipBandwidthResponseBody {
        this['billinginfo'] = billinginfo;
        return this;
    }
    public withId(id: string): EipBandwidthResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EipBandwidthResponseBody {
        this['name'] = name;
        return this;
    }
    public withPublicipInfo(publicipInfo: Array<PublicipInfoResponseBody>): EipBandwidthResponseBody {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<PublicipInfoResponseBody>  | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo(): Array<PublicipInfoResponseBody> | undefined {
        return this['publicip_info'];
    }
    public withType(type: EipBandwidthResponseBodyTypeEnum | string): EipBandwidthResponseBody {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): EipBandwidthResponseBody {
        this['size'] = size;
        return this;
    }
    public withTenantId(tenantId: string): EipBandwidthResponseBody {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withTags(tags: Array<string>): EipBandwidthResponseBody {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: Date): EipBandwidthResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EipBandwidthResponseBody {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EipBandwidthResponseBodyTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
