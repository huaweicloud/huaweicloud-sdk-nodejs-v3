

export class VideoSplitTaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): VideoSplitTaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): VideoSplitTaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): VideoSplitTaskInputData {
        this['url'] = url;
        return this;
    }
}