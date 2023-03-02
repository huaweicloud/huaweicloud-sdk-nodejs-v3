

export class TaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): TaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): TaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): TaskInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): TaskInputData {
        this['key'] = key;
        return this;
    }
}