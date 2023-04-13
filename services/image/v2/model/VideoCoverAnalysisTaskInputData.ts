

export class VideoCoverAnalysisTaskInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): VideoCoverAnalysisTaskInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): VideoCoverAnalysisTaskInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): VideoCoverAnalysisTaskInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): VideoCoverAnalysisTaskInputData {
        this['key'] = key;
        return this;
    }
}