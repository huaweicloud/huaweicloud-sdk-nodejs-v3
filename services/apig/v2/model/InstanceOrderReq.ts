import { InstanceCreateReqV2 } from './InstanceCreateReqV2';


export class InstanceOrderReq {
    private 'product_id'?: string;
    private 'charging_mode'?: InstanceOrderReqChargingModeEnum | number;
    private 'payment_mode'?: InstanceOrderReqPaymentModeEnum | string;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: InstanceOrderReqIsAutoRenewEnum | number;
    private 'promotion_id'?: string;
    private 'promotion_plan_id'?: string;
    private 'promotion_info'?: string;
    private 'composite_product_id'?: string;
    private 'instance_info'?: InstanceCreateReqV2;
    public constructor() { 
    }
    public withProductId(productId: string): InstanceOrderReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withChargingMode(chargingMode: InstanceOrderReqChargingModeEnum | number): InstanceOrderReq {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: InstanceOrderReqChargingModeEnum | number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): InstanceOrderReqChargingModeEnum | number | undefined {
        return this['charging_mode'];
    }
    public withPaymentMode(paymentMode: InstanceOrderReqPaymentModeEnum | string): InstanceOrderReq {
        this['payment_mode'] = paymentMode;
        return this;
    }
    public set paymentMode(paymentMode: InstanceOrderReqPaymentModeEnum | string  | undefined) {
        this['payment_mode'] = paymentMode;
    }
    public get paymentMode(): InstanceOrderReqPaymentModeEnum | string | undefined {
        return this['payment_mode'];
    }
    public withPeriodType(periodType: number): InstanceOrderReq {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): InstanceOrderReq {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: InstanceOrderReqIsAutoRenewEnum | number): InstanceOrderReq {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: InstanceOrderReqIsAutoRenewEnum | number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): InstanceOrderReqIsAutoRenewEnum | number | undefined {
        return this['is_auto_renew'];
    }
    public withPromotionId(promotionId: string): InstanceOrderReq {
        this['promotion_id'] = promotionId;
        return this;
    }
    public set promotionId(promotionId: string  | undefined) {
        this['promotion_id'] = promotionId;
    }
    public get promotionId(): string | undefined {
        return this['promotion_id'];
    }
    public withPromotionPlanId(promotionPlanId: string): InstanceOrderReq {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withPromotionInfo(promotionInfo: string): InstanceOrderReq {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withCompositeProductId(compositeProductId: string): InstanceOrderReq {
        this['composite_product_id'] = compositeProductId;
        return this;
    }
    public set compositeProductId(compositeProductId: string  | undefined) {
        this['composite_product_id'] = compositeProductId;
    }
    public get compositeProductId(): string | undefined {
        return this['composite_product_id'];
    }
    public withInstanceInfo(instanceInfo: InstanceCreateReqV2): InstanceOrderReq {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: InstanceCreateReqV2  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): InstanceCreateReqV2 | undefined {
        return this['instance_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceOrderReqChargingModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceOrderReqPaymentModeEnum {
    ALL_UPFRONT = 'ALL_UPFRONT'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceOrderReqIsAutoRenewEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
