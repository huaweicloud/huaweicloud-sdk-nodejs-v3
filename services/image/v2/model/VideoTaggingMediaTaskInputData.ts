

export class VideoTaggingMediaTaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): VideoTaggingMediaTaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): VideoTaggingMediaTaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): VideoTaggingMediaTaskInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): VideoTaggingMediaTaskInputData {
        this['key'] = key;
        return this;
    }
}