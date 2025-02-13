import { ScalingTriggerMeta } from './ScalingTriggerMeta';


export class ScaleConfigurationDataTrigger {
    public type?: ScaleConfigurationDataTriggerTypeEnum | string;
    public metadata?: ScalingTriggerMeta;
    public constructor() { 
    }
    public withType(type: ScaleConfigurationDataTriggerTypeEnum | string): ScaleConfigurationDataTrigger {
        this['type'] = type;
        return this;
    }
    public withMetadata(metadata: ScalingTriggerMeta): ScaleConfigurationDataTrigger {
        this['metadata'] = metadata;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScaleConfigurationDataTriggerTypeEnum {
    CPU = 'cpu',
    MEMORY = 'memory',
    CRON = 'cron'
}
