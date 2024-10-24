

export class ResourceUsageInfo {
    private 'resource_type'?: string;
    private 'business_type'?: ResourceUsageInfoBusinessTypeEnum | string;
    private 'sub_resource_type'?: string;
    private 'is_sub_resource'?: boolean;
    private 'charging_mode'?: ResourceUsageInfoChargingModeEnum | string;
    private 'resource_source'?: string;
    public amount?: number;
    public usage?: number;
    public unit?: ResourceUsageInfoUnitEnum | string;
    public constructor() { 
    }
    public withResourceType(resourceType: string): ResourceUsageInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBusinessType(businessType: ResourceUsageInfoBusinessTypeEnum | string): ResourceUsageInfo {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: ResourceUsageInfoBusinessTypeEnum | string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): ResourceUsageInfoBusinessTypeEnum | string | undefined {
        return this['business_type'];
    }
    public withSubResourceType(subResourceType: string): ResourceUsageInfo {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): string | undefined {
        return this['sub_resource_type'];
    }
    public withIsSubResource(isSubResource: boolean): ResourceUsageInfo {
        this['is_sub_resource'] = isSubResource;
        return this;
    }
    public set isSubResource(isSubResource: boolean  | undefined) {
        this['is_sub_resource'] = isSubResource;
    }
    public get isSubResource(): boolean | undefined {
        return this['is_sub_resource'];
    }
    public withChargingMode(chargingMode: ResourceUsageInfoChargingModeEnum | string): ResourceUsageInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: ResourceUsageInfoChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): ResourceUsageInfoChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withResourceSource(resourceSource: string): ResourceUsageInfo {
        this['resource_source'] = resourceSource;
        return this;
    }
    public set resourceSource(resourceSource: string  | undefined) {
        this['resource_source'] = resourceSource;
    }
    public get resourceSource(): string | undefined {
        return this['resource_source'];
    }
    public withAmount(amount: number): ResourceUsageInfo {
        this['amount'] = amount;
        return this;
    }
    public withUsage(usage: number): ResourceUsageInfo {
        this['usage'] = usage;
        return this;
    }
    public withUnit(unit: ResourceUsageInfoUnitEnum | string): ResourceUsageInfo {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceUsageInfoBusinessTypeEnum {
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
export enum ResourceUsageInfoChargingModeEnum {
    PERIODIC = 'PERIODIC',
    ONE_TIME = 'ONE_TIME',
    ON_DEMAND = 'ON_DEMAND'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourceUsageInfoUnitEnum {
    NUM = 'NUM',
    MIN = 'MIN',
    HOUR = 'HOUR',
    CHANNEL = 'CHANNEL',
    GB = 'GB',
    MILLION_WORDS = 'MILLION_WORDS',
    TEN_THOUSAND_WORDS = 'TEN_THOUSAND_WORDS',
    TIME = 'TIME'
}
