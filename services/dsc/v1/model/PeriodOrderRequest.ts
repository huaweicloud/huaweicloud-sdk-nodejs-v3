import { ProductInfoBean } from './ProductInfoBean';


export class PeriodOrderRequest {
    private 'charging_mode'?: number;
    private 'cloud_service_type'?: string;
    private 'composite_product_id'?: string;
    private 'discount_id'?: string;
    private 'is_auto_renew'?: number;
    private 'period_num'?: number;
    private 'period_type'?: number;
    private 'product_infos'?: Array<ProductInfoBean>;
    private 'promotion_activity_id'?: string;
    private 'promotion_info'?: string;
    private 'region_id'?: string;
    public zone?: string;
    public constructor(chargingMode?: number, cloudServiceType?: string, periodNum?: number, periodType?: number, productInfos?: Array<ProductInfoBean>, regionId?: string, zone?: string) { 
        this['charging_mode'] = chargingMode;
        this['cloud_service_type'] = cloudServiceType;
        this['period_num'] = periodNum;
        this['period_type'] = periodType;
        this['product_infos'] = productInfos;
        this['region_id'] = regionId;
        this['zone'] = zone;
    }
    public withChargingMode(chargingMode: number): PeriodOrderRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withCloudServiceType(cloudServiceType: string): PeriodOrderRequest {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withCompositeProductId(compositeProductId: string): PeriodOrderRequest {
        this['composite_product_id'] = compositeProductId;
        return this;
    }
    public set compositeProductId(compositeProductId: string  | undefined) {
        this['composite_product_id'] = compositeProductId;
    }
    public get compositeProductId(): string | undefined {
        return this['composite_product_id'];
    }
    public withDiscountId(discountId: string): PeriodOrderRequest {
        this['discount_id'] = discountId;
        return this;
    }
    public set discountId(discountId: string  | undefined) {
        this['discount_id'] = discountId;
    }
    public get discountId(): string | undefined {
        return this['discount_id'];
    }
    public withIsAutoRenew(isAutoRenew: number): PeriodOrderRequest {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withPeriodNum(periodNum: number): PeriodOrderRequest {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodType(periodType: number): PeriodOrderRequest {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withProductInfos(productInfos: Array<ProductInfoBean>): PeriodOrderRequest {
        this['product_infos'] = productInfos;
        return this;
    }
    public set productInfos(productInfos: Array<ProductInfoBean>  | undefined) {
        this['product_infos'] = productInfos;
    }
    public get productInfos(): Array<ProductInfoBean> | undefined {
        return this['product_infos'];
    }
    public withPromotionActivityId(promotionActivityId: string): PeriodOrderRequest {
        this['promotion_activity_id'] = promotionActivityId;
        return this;
    }
    public set promotionActivityId(promotionActivityId: string  | undefined) {
        this['promotion_activity_id'] = promotionActivityId;
    }
    public get promotionActivityId(): string | undefined {
        return this['promotion_activity_id'];
    }
    public withPromotionInfo(promotionInfo: string): PeriodOrderRequest {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withRegionId(regionId: string): PeriodOrderRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withZone(zone: string): PeriodOrderRequest {
        this['zone'] = zone;
        return this;
    }
}