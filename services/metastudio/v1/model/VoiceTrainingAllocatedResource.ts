import { ChardMode } from './ChardMode';


export class VoiceTrainingAllocatedResource {
    private 'resource_id'?: string;
    private 'charge_mode'?: ChardMode;
    private 'expire_time'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): VoiceTrainingAllocatedResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withChargeMode(chargeMode: ChardMode): VoiceTrainingAllocatedResource {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ChardMode  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ChardMode | undefined {
        return this['charge_mode'];
    }
    public withExpireTime(expireTime: string): VoiceTrainingAllocatedResource {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
}