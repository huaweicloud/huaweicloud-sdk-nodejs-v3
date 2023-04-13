

export class VideoTranslateTaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): VideoTranslateTaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): VideoTranslateTaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): VideoTranslateTaskInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): VideoTranslateTaskInputData {
        this['key'] = key;
        return this;
    }
}