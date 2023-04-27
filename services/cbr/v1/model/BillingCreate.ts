import { BillbingCreateExtraInfo } from './BillbingCreateExtraInfo';


export class BillingCreate {
    private 'cloud_type'?: BillingCreateCloudTypeEnum | undefined;
    private 'consistent_level': BillingCreateConsistentLevelEnum | undefined;
    private 'object_type': BillingCreateObjectTypeEnum | undefined;
    private 'protect_type': BillingCreateProtectTypeEnum | undefined;
    public size: number;
    private 'charging_mode'?: BillingCreateChargingModeEnum | undefined;
    private 'period_type'?: BillingCreatePeriodTypeEnum | undefined;
    private 'period_num'?: number | undefined;
    private 'is_auto_renew'?: boolean | undefined;
    private 'is_auto_pay'?: boolean | undefined;
    private 'console_url'?: string | undefined;
    private 'extra_info'?: BillbingCreateExtraInfo | undefined;
    private 'is_multi_az'?: boolean | undefined;
    private 'promotion_info'?: string | undefined;
    private 'purchase_mode'?: string | undefined;
    private 'order_id'?: string | undefined;
    public constructor(consistentLevel?: any, objectType?: any, protectType?: any, size?: any) { 
        this['consistent_level'] = consistentLevel;
        this['object_type'] = objectType;
        this['protect_type'] = protectType;
        this['size'] = size;
    }
    public withCloudType(cloudType: BillingCreateCloudTypeEnum): BillingCreate {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: BillingCreateCloudTypeEnum | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType() {
        return this['cloud_type'];
    }
    public withConsistentLevel(consistentLevel: BillingCreateConsistentLevelEnum): BillingCreate {
        this['consistent_level'] = consistentLevel;
        return this;
    }
    public set consistentLevel(consistentLevel: BillingCreateConsistentLevelEnum | undefined) {
        this['consistent_level'] = consistentLevel;
    }
    public get consistentLevel() {
        return this['consistent_level'];
    }
    public withObjectType(objectType: BillingCreateObjectTypeEnum): BillingCreate {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: BillingCreateObjectTypeEnum | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType() {
        return this['object_type'];
    }
    public withProtectType(protectType: BillingCreateProtectTypeEnum): BillingCreate {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: BillingCreateProtectTypeEnum | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType() {
        return this['protect_type'];
    }
    public withSize(size: number): BillingCreate {
        this['size'] = size;
        return this;
    }
    public withChargingMode(chargingMode: BillingCreateChargingModeEnum): BillingCreate {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BillingCreateChargingModeEnum | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: BillingCreatePeriodTypeEnum): BillingCreate {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: BillingCreatePeriodTypeEnum | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): BillingCreate {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): BillingCreate {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew() {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): BillingCreate {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay() {
        return this['is_auto_pay'];
    }
    public withConsoleUrl(consoleUrl: string): BillingCreate {
        this['console_url'] = consoleUrl;
        return this;
    }
    public set consoleUrl(consoleUrl: string | undefined) {
        this['console_url'] = consoleUrl;
    }
    public get consoleUrl() {
        return this['console_url'];
    }
    public withExtraInfo(extraInfo: BillbingCreateExtraInfo): BillingCreate {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: BillbingCreateExtraInfo | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
        return this['extra_info'];
    }
    public withIsMultiAz(isMultiAz: boolean): BillingCreate {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz() {
        return this['is_multi_az'];
    }
    public withPromotionInfo(promotionInfo: string): BillingCreate {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo() {
        return this['promotion_info'];
    }
    public withPurchaseMode(purchaseMode: string): BillingCreate {
        this['purchase_mode'] = purchaseMode;
        return this;
    }
    public set purchaseMode(purchaseMode: string | undefined) {
        this['purchase_mode'] = purchaseMode;
    }
    public get purchaseMode() {
        return this['purchase_mode'];
    }
    public withOrderId(orderId: string): BillingCreate {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BillingCreateCloudTypeEnum {
    PUBLIC = 'public',
    HYBRID = 'hybrid'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingCreateConsistentLevelEnum {
    APP_CONSISTENT = 'app_consistent',
    CRASH_CONSISTENT = 'crash_consistent'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingCreateObjectTypeEnum {
    SERVER = 'server',
    DISK = 'disk',
    TURBO = 'turbo',
    WORKSPACE = 'workspace',
    VMWARE = 'vmware',
    RDS = 'rds',
    FILE = 'file'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingCreateProtectTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingCreateChargingModeEnum {
    POST_PAID = 'post_paid',
    PRE_PAID = 'pre_paid'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingCreatePeriodTypeEnum {
    YEAR = 'year',
    MONTH = 'month'
}
