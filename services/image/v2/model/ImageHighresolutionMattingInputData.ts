

export class ImageHighresolutionMattingInputData {
    public bucket?: string;
    public path?: string;
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): ImageHighresolutionMattingInputData {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): ImageHighresolutionMattingInputData {
        this['path'] = path;
        return this;
    }
    public withUrl(url: string): ImageHighresolutionMattingInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): ImageHighresolutionMattingInputData {
        this['key'] = key;
        return this;
    }
}