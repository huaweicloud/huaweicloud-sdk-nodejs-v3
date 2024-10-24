

export class ResourceItemInfo {
    private 'resource_id'?: string;
    private 'order_id'?: string;
    private 'resource_expire_time'?: string;
    private 'resource_type'?: string;
    private 'business_type'?: ResourceItemInfoBusinessTypeEnum | string;
    private 'sub_resource_type'?: string;
    private 'is_sub_resource'?: boolean;
    private 'charging_mode'?: ResourceItemInfoChargingModeEnum | string;
    private 'resource_source'?: string;
    public amount?: number;
    public usage?: number;
    public unit?: ResourceItemInfoUnitEnum | string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceItemInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withOrderId(orderId: string): ResourceItemInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withResourceExpireTime(resourceExpireTime: string): ResourceItemInfo {
        this['resource_expire_time'] = resourceExpireTime;
        return this;
    }
    public set resourceExpireTime(resourceExpireTime: string  | undefined) {
        this['resource_expire_time'] = resourceExpireTime;
    }
    public get resourceExpireTime(): string | undefined {
        return this['resource_expire_time'];
    }
    public withResourceType(resourceType: string): ResourceItemInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBusinessType(businessType: ResourceItemInfoBusinessTypeEnum | string): ResourceItemInfo {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: ResourceItemInfoBusinessTypeEnum | string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): ResourceItemInfoBusinessTypeEnum | string | undefined {
        return this['business_type'];
    }
    public withSubResourceType(subResourceType: string): ResourceItemInfo {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): string | undefined {
        return this['sub_resource_type'];
    }
    public withIsSubResource(isSubResource: boolean): ResourceItemInfo {
        this['is_sub_resource'] = isSubResource;
        return this;
    }
    public set isSubResource(isSubResource: boolean  | undefined) {
        this['is_sub_resource'] = isSubResource;
    }
    public get isSubResource(): boolean | undefined {
        return this['is_sub_resource'];
    }
    public withChargingMode(chargingMode: ResourceItemInfoChargingModeEnum | string): ResourceItemInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: ResourceItemInfoChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): ResourceItemInfoChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withResourceSource(resourceSource: string): ResourceItemInfo {
        this['resource_source'] = resourceSource;
        return this;
    }
    public set resourceSource(resourceSource: string  | undefined) {
        this['resource_source'] = resourceSource;
    }
    public get resourceSource(): string | undefined {
        return this['resource_source'];
    }
    public withAmount(amount: number): ResourceItemInfo {
        this['amount'] = amount;
        return this;
    }
    public withUsage(usage: number): ResourceItemInfo {
        this['usage'] = usage;
        return this;
    }
    public withUnit(unit: ResourceItemInfoUnitEnum | string): ResourceItemInfo {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceItemInfoBusinessTypeEnum {
    VOICE_CLONE = 'VOICE_CLONE',
    SYNTHETICS_SOUND = 'SYNTHETICS_SOUND',
    ASSET_MANAGER = 'ASSET_MANAGER',
    MODELING_2D = 'MODELING_2D',
    LIVE_2D = 'LIVE_2D',
    VIDEO_2D = 'VIDEO_2D',
    CHAT_2D = 'CHAT_2D',
    BUSINESS_CARD_2D = 'BUSINESS_CARD_2D',
    PICTURE_2D = 'PICTURE_2D',
    MODELING_3D = 'MODELING_3D',
    VDS_3D = 'VDS_3D',
    TTSA_3D = 'TTSA_3D',
    FLEXUS_2D = 'FLEXUS_2D'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourceItemInfoChargingModeEnum {
    PERIODIC = 'PERIODIC',
    ONE_TIME = 'ONE_TIME',
    ON_DEMAND = 'ON_DEMAND'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourceItemInfoUnitEnum {
    NUM = 'NUM',
    MIN = 'MIN',
    HOUR = 'HOUR',
    CHANNEL = 'CHANNEL',
    GB = 'GB',
    MILLION_WORDS = 'MILLION_WORDS',
    TEN_THOUSAND_WORDS = 'TEN_THOUSAND_WORDS',
    TIME = 'TIME'
}
