

export class CreateClusterRequestBody {
    private 'charging_mode'?: CreateClusterRequestBodyChargingModeEnum | number;
    private 'region_id'?: string;
    private 'period_type'?: CreateClusterRequestBodyPeriodTypeEnum | number;
    private 'period_num'?: number;
    private 'subscription_num'?: number;
    private 'period_product_id'?: string;
    private 'period_resource_spec_code'?: string;
    private 'cluster_name'?: string;
    private 'service_type'?: string;
    private 'share_type'?: CreateClusterRequestBodyShareTypeEnum | string;
    private 'image_id'?: string;
    private 'is_auto_renew'?: number;
    private 'promotion_info'?: string;
    private 'app_id'?: string;
    private 'enterprise_project_id'?: string;
    public type?: CreateClusterRequestBodyTypeEnum | string;
    public az?: string;
    public constructor(chargingMode?: number, regionId?: string, periodType?: number, periodNum?: number, subscriptionNum?: number, periodProductId?: string, periodResourceSpecCode?: string, clusterName?: string, serviceType?: string, shareType?: string, isAutoRenew?: number, az?: string) { 
        this['charging_mode'] = chargingMode;
        this['region_id'] = regionId;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['subscription_num'] = subscriptionNum;
        this['period_product_id'] = periodProductId;
        this['period_resource_spec_code'] = periodResourceSpecCode;
        this['cluster_name'] = clusterName;
        this['service_type'] = serviceType;
        this['share_type'] = shareType;
        this['is_auto_renew'] = isAutoRenew;
        this['az'] = az;
    }
    public withChargingMode(chargingMode: CreateClusterRequestBodyChargingModeEnum | number): CreateClusterRequestBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: CreateClusterRequestBodyChargingModeEnum | number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): CreateClusterRequestBodyChargingModeEnum | number | undefined {
        return this['charging_mode'];
    }
    public withRegionId(regionId: string): CreateClusterRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withPeriodType(periodType: CreateClusterRequestBodyPeriodTypeEnum | number): CreateClusterRequestBody {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: CreateClusterRequestBodyPeriodTypeEnum | number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): CreateClusterRequestBodyPeriodTypeEnum | number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateClusterRequestBody {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withSubscriptionNum(subscriptionNum: number): CreateClusterRequestBody {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
    public withPeriodProductId(periodProductId: string): CreateClusterRequestBody {
        this['period_product_id'] = periodProductId;
        return this;
    }
    public set periodProductId(periodProductId: string  | undefined) {
        this['period_product_id'] = periodProductId;
    }
    public get periodProductId(): string | undefined {
        return this['period_product_id'];
    }
    public withPeriodResourceSpecCode(periodResourceSpecCode: string): CreateClusterRequestBody {
        this['period_resource_spec_code'] = periodResourceSpecCode;
        return this;
    }
    public set periodResourceSpecCode(periodResourceSpecCode: string  | undefined) {
        this['period_resource_spec_code'] = periodResourceSpecCode;
    }
    public get periodResourceSpecCode(): string | undefined {
        return this['period_resource_spec_code'];
    }
    public withClusterName(clusterName: string): CreateClusterRequestBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withServiceType(serviceType: string): CreateClusterRequestBody {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withShareType(shareType: CreateClusterRequestBodyShareTypeEnum | string): CreateClusterRequestBody {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: CreateClusterRequestBodyShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): CreateClusterRequestBodyShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withImageId(imageId: string): CreateClusterRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withIsAutoRenew(isAutoRenew: number): CreateClusterRequestBody {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withPromotionInfo(promotionInfo: string): CreateClusterRequestBody {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withAppId(appId: string): CreateClusterRequestBody {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: CreateClusterRequestBodyTypeEnum | string): CreateClusterRequestBody {
        this['type'] = type;
        return this;
    }
    public withAz(az: string): CreateClusterRequestBody {
        this['az'] = az;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateClusterRequestBodyChargingModeEnum {
    NUMBER_0 = 0
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterRequestBodyPeriodTypeEnum {
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterRequestBodyShareTypeEnum {
    EXCLUSIVE = 'EXCLUSIVE',
    SHARED = 'SHARED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterRequestBodyTypeEnum {
    SINGLE = 'SINGLE',
    STANDBY = 'STANDBY'
}
