

export class ImageTranslateTaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): ImageTranslateTaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): ImageTranslateTaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): ImageTranslateTaskInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): ImageTranslateTaskInputData {
        this['key'] = key;
        return this;
    }
}