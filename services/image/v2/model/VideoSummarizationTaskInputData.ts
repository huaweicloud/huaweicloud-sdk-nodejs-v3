

export class VideoSummarizationTaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): VideoSummarizationTaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): VideoSummarizationTaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): VideoSummarizationTaskInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): VideoSummarizationTaskInputData {
        this['key'] = key;
        return this;
    }
}