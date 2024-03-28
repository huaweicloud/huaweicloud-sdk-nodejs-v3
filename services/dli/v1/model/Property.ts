

export class Property {
    public key?: PropertyKeyEnum | string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: PropertyKeyEnum | string): Property {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Property {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PropertyKeyEnum {
    COMPUTEENGINE_MAXINSTANCES = 'computeEngine.maxInstances',
    COMPUTEENGINE_MAXPREFETCHINSTANCE = 'computeEngine.maxPrefetchInstance',
    JOB_MAXCONCURRENT = 'job.maxConcurrent',
    MULTIPLESC_SUPPORT = 'multipleSc.support'
}
