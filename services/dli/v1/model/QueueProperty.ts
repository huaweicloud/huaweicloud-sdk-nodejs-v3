

export class QueueProperty {
    public key?: QueuePropertyKeyEnum | string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: QueuePropertyKeyEnum | string): QueueProperty {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): QueueProperty {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueuePropertyKeyEnum {
    COMPUTEENGINE_MAXINSTANCES = 'computeEngine.maxInstances',
    COMPUTEENGINE_MAXPREFETCHINSTANCE = 'computeEngine.maxPrefetchInstance',
    JOB_MAXCONCURRENT = 'job.maxConcurrent',
    MULTIPLESC_SUPPORT = 'multipleSc.support',
    JOB_SAVEJOBRESULTTOJOBBUCKET = 'job.saveJobResultToJobBucket',
    COMPUTEENGINE_SPARK_NATIVEENABLED = 'computeEngine.spark.nativeEnabled'
}
