import { ProductInfos } from './ProductInfos';


export class CreateInstanceOrder {
    private 'instance_key'?: number;
    private 'cloud_service_type'?: string;
    private 'region_id'?: string;
    private 'charging_mode'?: number;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'product_infos'?: Array<ProductInfos>;
    private 'is_auto_renew'?: number;
    private 'subscription_num'?: number;
    public constructor(instanceKey?: number, cloudServiceType?: string, regionId?: string, chargingMode?: number, periodType?: number, periodNum?: number, productInfos?: Array<ProductInfos>, subscriptionNum?: number) { 
        this['instance_key'] = instanceKey;
        this['cloud_service_type'] = cloudServiceType;
        this['region_id'] = regionId;
        this['charging_mode'] = chargingMode;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['product_infos'] = productInfos;
        this['subscription_num'] = subscriptionNum;
    }
    public withInstanceKey(instanceKey: number): CreateInstanceOrder {
        this['instance_key'] = instanceKey;
        return this;
    }
    public set instanceKey(instanceKey: number  | undefined) {
        this['instance_key'] = instanceKey;
    }
    public get instanceKey(): number | undefined {
        return this['instance_key'];
    }
    public withCloudServiceType(cloudServiceType: string): CreateInstanceOrder {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withRegionId(regionId: string): CreateInstanceOrder {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withChargingMode(chargingMode: number): CreateInstanceOrder {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: number): CreateInstanceOrder {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateInstanceOrder {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withProductInfos(productInfos: Array<ProductInfos>): CreateInstanceOrder {
        this['product_infos'] = productInfos;
        return this;
    }
    public set productInfos(productInfos: Array<ProductInfos>  | undefined) {
        this['product_infos'] = productInfos;
    }
    public get productInfos(): Array<ProductInfos> | undefined {
        return this['product_infos'];
    }
    public withIsAutoRenew(isAutoRenew: number): CreateInstanceOrder {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withSubscriptionNum(subscriptionNum: number): CreateInstanceOrder {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
}