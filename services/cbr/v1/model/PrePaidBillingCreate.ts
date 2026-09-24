

export class PrePaidBillingCreate {
    private 'cloud_type'?: string;
    private 'consistent_level'?: string;
    private 'object_type'?: string;
    private 'protect_type'?: string;
    public size?: number;
    private 'charging_mode'?: string;
    private 'period_type'?: PrePaidBillingCreatePeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    private 'console_url'?: string;
    private 'is_multi_az'?: boolean;
    private 'is_double_az'?: boolean;
    private 'promotion_info'?: string;
    private 'purchase_mode'?: string;
    private 'order_id'?: string;
    public constructor(consistentLevel?: string, objectType?: string, protectType?: string, size?: number, chargingMode?: string, periodType?: string, periodNum?: number) { 
        this['consistent_level'] = consistentLevel;
        this['object_type'] = objectType;
        this['protect_type'] = protectType;
        this['size'] = size;
        this['charging_mode'] = chargingMode;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
    }
    public withCloudType(cloudType: string): PrePaidBillingCreate {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withConsistentLevel(consistentLevel: string): PrePaidBillingCreate {
        this['consistent_level'] = consistentLevel;
        return this;
    }
    public set consistentLevel(consistentLevel: string  | undefined) {
        this['consistent_level'] = consistentLevel;
    }
    public get consistentLevel(): string | undefined {
        return this['consistent_level'];
    }
    public withObjectType(objectType: string): PrePaidBillingCreate {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withProtectType(protectType: string): PrePaidBillingCreate {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
    public withSize(size: number): PrePaidBillingCreate {
        this['size'] = size;
        return this;
    }
    public withChargingMode(chargingMode: string): PrePaidBillingCreate {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: PrePaidBillingCreatePeriodTypeEnum | string): PrePaidBillingCreate {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PrePaidBillingCreatePeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): PrePaidBillingCreatePeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): PrePaidBillingCreate {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): PrePaidBillingCreate {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): PrePaidBillingCreate {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withConsoleUrl(consoleUrl: string): PrePaidBillingCreate {
        this['console_url'] = consoleUrl;
        return this;
    }
    public set consoleUrl(consoleUrl: string  | undefined) {
        this['console_url'] = consoleUrl;
    }
    public get consoleUrl(): string | undefined {
        return this['console_url'];
    }
    public withIsMultiAz(isMultiAz: boolean): PrePaidBillingCreate {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean  | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz(): boolean | undefined {
        return this['is_multi_az'];
    }
    public withIsDoubleAz(isDoubleAz: boolean): PrePaidBillingCreate {
        this['is_double_az'] = isDoubleAz;
        return this;
    }
    public set isDoubleAz(isDoubleAz: boolean  | undefined) {
        this['is_double_az'] = isDoubleAz;
    }
    public get isDoubleAz(): boolean | undefined {
        return this['is_double_az'];
    }
    public withPromotionInfo(promotionInfo: string): PrePaidBillingCreate {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withPurchaseMode(purchaseMode: string): PrePaidBillingCreate {
        this['purchase_mode'] = purchaseMode;
        return this;
    }
    public set purchaseMode(purchaseMode: string  | undefined) {
        this['purchase_mode'] = purchaseMode;
    }
    public get purchaseMode(): string | undefined {
        return this['purchase_mode'];
    }
    public withOrderId(orderId: string): PrePaidBillingCreate {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrePaidBillingCreatePeriodTypeEnum {
    YEAR = 'year',
    MONTH = 'month'
}
