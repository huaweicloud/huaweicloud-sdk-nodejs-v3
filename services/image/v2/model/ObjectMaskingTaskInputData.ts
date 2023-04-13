

export class ObjectMaskingTaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): ObjectMaskingTaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): ObjectMaskingTaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): ObjectMaskingTaskInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): ObjectMaskingTaskInputData {
        this['key'] = key;
        return this;
    }
}