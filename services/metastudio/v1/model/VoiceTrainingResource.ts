import { ChardMode } from './ChardMode';


export class VoiceTrainingResource {
    private 'operation_type'?: VoiceTrainingResourceOperationTypeEnum | string;
    private 'resource_source'?: VoiceTrainingResourceResourceSourceEnum | string;
    private 'asset_id'?: string;
    private 'resource_id'?: string;
    private 'resource_nums'?: number;
    private 'resource_available_nums'?: number;
    private 'resource_type'?: VoiceTrainingResourceResourceTypeEnum | string;
    private 'charge_mode'?: ChardMode;
    private 'expire_time'?: string;
    public status?: number;
    public constructor() { 
    }
    public withOperationType(operationType: VoiceTrainingResourceOperationTypeEnum | string): VoiceTrainingResource {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: VoiceTrainingResourceOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): VoiceTrainingResourceOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withResourceSource(resourceSource: VoiceTrainingResourceResourceSourceEnum | string): VoiceTrainingResource {
        this['resource_source'] = resourceSource;
        return this;
    }
    public set resourceSource(resourceSource: VoiceTrainingResourceResourceSourceEnum | string  | undefined) {
        this['resource_source'] = resourceSource;
    }
    public get resourceSource(): VoiceTrainingResourceResourceSourceEnum | string | undefined {
        return this['resource_source'];
    }
    public withAssetId(assetId: string): VoiceTrainingResource {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withResourceId(resourceId: string): VoiceTrainingResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceNums(resourceNums: number): VoiceTrainingResource {
        this['resource_nums'] = resourceNums;
        return this;
    }
    public set resourceNums(resourceNums: number  | undefined) {
        this['resource_nums'] = resourceNums;
    }
    public get resourceNums(): number | undefined {
        return this['resource_nums'];
    }
    public withResourceAvailableNums(resourceAvailableNums: number): VoiceTrainingResource {
        this['resource_available_nums'] = resourceAvailableNums;
        return this;
    }
    public set resourceAvailableNums(resourceAvailableNums: number  | undefined) {
        this['resource_available_nums'] = resourceAvailableNums;
    }
    public get resourceAvailableNums(): number | undefined {
        return this['resource_available_nums'];
    }
    public withResourceType(resourceType: VoiceTrainingResourceResourceTypeEnum | string): VoiceTrainingResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: VoiceTrainingResourceResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): VoiceTrainingResourceResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withChargeMode(chargeMode: ChardMode): VoiceTrainingResource {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ChardMode  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ChardMode | undefined {
        return this['charge_mode'];
    }
    public withExpireTime(expireTime: string): VoiceTrainingResource {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withStatus(status: number): VoiceTrainingResource {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VoiceTrainingResourceOperationTypeEnum {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    FREEZE = 'FREEZE',
    UNFREEZE = 'UNFREEZE',
    REBIND = 'REBIND'
}
/**
    * @export
    * @enum {string}
    */
export enum VoiceTrainingResourceResourceSourceEnum {
    PURCHASED = 'PURCHASED',
    SP_ALLOCATED = 'SP_ALLOCATED',
    ADMIN_ALLOCATED = 'ADMIN_ALLOCATED'
}
/**
    * @export
    * @enum {string}
    */
export enum VoiceTrainingResourceResourceTypeEnum {
    BASIC = 'BASIC',
    MIDDLE = 'MIDDLE',
    ADVANCE = 'ADVANCE',
    THIRD_PARTY = 'THIRD_PARTY',
    THIRD_PARTY_LJZN = 'THIRD_PARTY_LJZN',
    TTS_CMWW = 'TTS_CMWW',
    TTS_LJZN = 'TTS_LJZN',
    FLEXUS = 'FLEXUS'
}
