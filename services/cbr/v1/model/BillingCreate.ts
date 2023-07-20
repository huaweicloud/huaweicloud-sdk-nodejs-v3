

export class BillingCreate {
    private 'cloud_type'?: BillingCreateCloudTypeEnum | string;
    private 'consistent_level'?: BillingCreateConsistentLevelEnum | string;
    private 'object_type'?: BillingCreateObjectTypeEnum | string;
    private 'protect_type'?: BillingCreateProtectTypeEnum | string;
    public size?: number;
    private 'charging_mode'?: BillingCreateChargingModeEnum | string;
    private 'period_type'?: BillingCreatePeriodTypeEnum | string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    private 'console_url'?: string;
    private 'is_multi_az'?: boolean;
    private 'promotion_info'?: string;
    private 'purchase_mode'?: string;
    private 'order_id'?: string;
    public constructor(consistentLevel?: string, objectType?: string, protectType?: string, size?: number) { 
        this['consistent_level'] = consistentLevel;
        this['object_type'] = objectType;
        this['protect_type'] = protectType;
        this['size'] = size;
    }
    public withCloudType(cloudType: BillingCreateCloudTypeEnum | string): BillingCreate {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: BillingCreateCloudTypeEnum | string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): BillingCreateCloudTypeEnum | string | undefined {
        return this['cloud_type'];
    }
    public withConsistentLevel(consistentLevel: BillingCreateConsistentLevelEnum | string): BillingCreate {
        this['consistent_level'] = consistentLevel;
        return this;
    }
    public set consistentLevel(consistentLevel: BillingCreateConsistentLevelEnum | string  | undefined) {
        this['consistent_level'] = consistentLevel;
    }
    public get consistentLevel(): BillingCreateConsistentLevelEnum | string | undefined {
        return this['consistent_level'];
    }
    public withObjectType(objectType: BillingCreateObjectTypeEnum | string): BillingCreate {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: BillingCreateObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): BillingCreateObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withProtectType(protectType: BillingCreateProtectTypeEnum | string): BillingCreate {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: BillingCreateProtectTypeEnum | string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): BillingCreateProtectTypeEnum | string | undefined {
        return this['protect_type'];
    }
    public withSize(size: number): BillingCreate {
        this['size'] = size;
        return this;
    }
    public withChargingMode(chargingMode: BillingCreateChargingModeEnum | string): BillingCreate {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BillingCreateChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): BillingCreateChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: BillingCreatePeriodTypeEnum | string): BillingCreate {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: BillingCreatePeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): BillingCreatePeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): BillingCreate {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): BillingCreate {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): BillingCreate {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withConsoleUrl(consoleUrl: string): BillingCreate {
        this['console_url'] = consoleUrl;
        return this;
    }
    public set consoleUrl(consoleUrl: string  | undefined) {
        this['console_url'] = consoleUrl;
    }
    public get consoleUrl(): string | undefined {
        return this['console_url'];
    }
    public withIsMultiAz(isMultiAz: boolean): BillingCreate {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean  | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz(): boolean | undefined {
        return this['is_multi_az'];
    }
    public withPromotionInfo(promotionInfo: string): BillingCreate {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withPurchaseMode(purchaseMode: string): BillingCreate {
        this['purchase_mode'] = purchaseMode;
        return this;
    }
    public set purchaseMode(purchaseMode: string  | undefined) {
        this['purchase_mode'] = purchaseMode;
    }
    public get purchaseMode(): string | undefined {
        return this['purchase_mode'];
    }
    public withOrderId(orderId: string): BillingCreate {
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
