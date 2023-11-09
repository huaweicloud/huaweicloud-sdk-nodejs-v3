

export class ListQueuePropertyRespProperties {
    public key?: ListQueuePropertyRespPropertiesKeyEnum | string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: ListQueuePropertyRespPropertiesKeyEnum | string): ListQueuePropertyRespProperties {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ListQueuePropertyRespProperties {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListQueuePropertyRespPropertiesKeyEnum {
    COMPUTEENGINE_MAXINSTANCES = 'computeEngine.maxInstances',
    COMPUTEENGINE_MAXPREFETCHINSTANCE = 'computeEngine.maxPrefetchInstance',
    JOB_MAXCONCURRENT = 'job.maxConcurrent',
    MULTIPLESC_SUPPORT = 'multipleSc.support'
}
