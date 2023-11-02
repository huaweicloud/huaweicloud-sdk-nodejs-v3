import { CreateInstancePeriodRequestNics } from './CreateInstancePeriodRequestNics';
import { CreateInstancePeriodRequestProductInfos } from './CreateInstancePeriodRequestProductInfos';
import { CreateInstancePeriodRequestSecurityGroups } from './CreateInstancePeriodRequestSecurityGroups';
import { KeyValueBean } from './KeyValueBean';


export class CreateInstancePeriodRequest {
    private 'flavor_ref'?: string;
    public name?: string;
    private 'vpc_id'?: string;
    private 'availability_zone'?: string;
    private 'enterprise_project_id'?: string;
    public nics?: Array<CreateInstancePeriodRequestNics>;
    private 'security_groups'?: Array<CreateInstancePeriodRequestSecurityGroups>;
    public comment?: string;
    public region?: string;
    private 'cloud_service_type'?: string;
    private 'charging_mode'?: number;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'subscription_num'?: number;
    private 'product_infos'?: Array<CreateInstancePeriodRequestProductInfos>;
    public tags?: Array<KeyValueBean>;
    private 'promotion_info'?: string;
    private 'is_auto_renew'?: number;
    public constructor(flavorRef?: string, name?: string, vpcId?: string, availabilityZone?: string, enterpriseProjectId?: string, nics?: Array<CreateInstancePeriodRequestNics>, securityGroups?: Array<CreateInstancePeriodRequestSecurityGroups>, region?: string, cloudServiceType?: string, chargingMode?: number, periodType?: number, periodNum?: number, subscriptionNum?: number, productInfos?: Array<CreateInstancePeriodRequestProductInfos>) { 
        this['flavor_ref'] = flavorRef;
        this['name'] = name;
        this['vpc_id'] = vpcId;
        this['availability_zone'] = availabilityZone;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['nics'] = nics;
        this['security_groups'] = securityGroups;
        this['region'] = region;
        this['cloud_service_type'] = cloudServiceType;
        this['charging_mode'] = chargingMode;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['subscription_num'] = subscriptionNum;
        this['product_infos'] = productInfos;
    }
    public withFlavorRef(flavorRef: string): CreateInstancePeriodRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withName(name: string): CreateInstancePeriodRequest {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): CreateInstancePeriodRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateInstancePeriodRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstancePeriodRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNics(nics: Array<CreateInstancePeriodRequestNics>): CreateInstancePeriodRequest {
        this['nics'] = nics;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<CreateInstancePeriodRequestSecurityGroups>): CreateInstancePeriodRequest {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<CreateInstancePeriodRequestSecurityGroups>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<CreateInstancePeriodRequestSecurityGroups> | undefined {
        return this['security_groups'];
    }
    public withComment(comment: string): CreateInstancePeriodRequest {
        this['comment'] = comment;
        return this;
    }
    public withRegion(region: string): CreateInstancePeriodRequest {
        this['region'] = region;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): CreateInstancePeriodRequest {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withChargingMode(chargingMode: number): CreateInstancePeriodRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: number): CreateInstancePeriodRequest {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateInstancePeriodRequest {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withSubscriptionNum(subscriptionNum: number): CreateInstancePeriodRequest {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
    public withProductInfos(productInfos: Array<CreateInstancePeriodRequestProductInfos>): CreateInstancePeriodRequest {
        this['product_infos'] = productInfos;
        return this;
    }
    public set productInfos(productInfos: Array<CreateInstancePeriodRequestProductInfos>  | undefined) {
        this['product_infos'] = productInfos;
    }
    public get productInfos(): Array<CreateInstancePeriodRequestProductInfos> | undefined {
        return this['product_infos'];
    }
    public withTags(tags: Array<KeyValueBean>): CreateInstancePeriodRequest {
        this['tags'] = tags;
        return this;
    }
    public withPromotionInfo(promotionInfo: string): CreateInstancePeriodRequest {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withIsAutoRenew(isAutoRenew: number): CreateInstancePeriodRequest {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
}