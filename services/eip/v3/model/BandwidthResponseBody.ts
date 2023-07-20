import { BandWidthRules } from './BandWidthRules';
import { PublicipInfoResponseBody } from './PublicipInfoResponseBody';


export class BandwidthResponseBody {
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
    public type?: BandwidthResponseBodyTypeEnum | string;
    public size?: number;
    private 'project_id'?: string;
    public tags?: Array<string>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withAdminState(adminState: string): BandwidthResponseBody {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: string  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): string | undefined {
        return this['admin_state'];
    }
    public withIngressSize(ingressSize: number): BandwidthResponseBody {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withRuleQuota(ruleQuota: number): BandwidthResponseBody {
        this['rule_quota'] = ruleQuota;
        return this;
    }
    public set ruleQuota(ruleQuota: number  | undefined) {
        this['rule_quota'] = ruleQuota;
    }
    public get ruleQuota(): number | undefined {
        return this['rule_quota'];
    }
    public withRatio95peakPlus(ratio95peakPlus: number): BandwidthResponseBody {
        this['ratio_95peak_plus'] = ratio95peakPlus;
        return this;
    }
    public set ratio95peakPlus(ratio95peakPlus: number  | undefined) {
        this['ratio_95peak_plus'] = ratio95peakPlus;
    }
    public get ratio95peakPlus(): number | undefined {
        return this['ratio_95peak_plus'];
    }
    public withEnableBandwidthRules(enableBandwidthRules: boolean): BandwidthResponseBody {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
        return this;
    }
    public set enableBandwidthRules(enableBandwidthRules: boolean  | undefined) {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
    }
    public get enableBandwidthRules(): boolean | undefined {
        return this['enable_bandwidth_rules'];
    }
    public withBandwidthRules(bandwidthRules: Array<BandWidthRules>): BandwidthResponseBody {
        this['bandwidth_rules'] = bandwidthRules;
        return this;
    }
    public set bandwidthRules(bandwidthRules: Array<BandWidthRules>  | undefined) {
        this['bandwidth_rules'] = bandwidthRules;
    }
    public get bandwidthRules(): Array<BandWidthRules> | undefined {
        return this['bandwidth_rules'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): BandwidthResponseBody {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withBandwidthType(bandwidthType: string): BandwidthResponseBody {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
        return this['bandwidth_type'];
    }
    public withBillinginfo(billinginfo: string): BandwidthResponseBody {
        this['billinginfo'] = billinginfo;
        return this;
    }
    public withId(id: string): BandwidthResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BandwidthResponseBody {
        this['name'] = name;
        return this;
    }
    public withPublicipInfo(publicipInfo: Array<PublicipInfoResponseBody>): BandwidthResponseBody {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<PublicipInfoResponseBody>  | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo(): Array<PublicipInfoResponseBody> | undefined {
        return this['publicip_info'];
    }
    public withType(type: BandwidthResponseBodyTypeEnum | string): BandwidthResponseBody {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): BandwidthResponseBody {
        this['size'] = size;
        return this;
    }
    public withProjectId(projectId: string): BandwidthResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTags(tags: Array<string>): BandwidthResponseBody {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: Date): BandwidthResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): BandwidthResponseBody {
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
export enum BandwidthResponseBodyTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
