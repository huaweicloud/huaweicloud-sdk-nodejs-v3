

export class RecaptureDetectReq {
    public image?: string;
    public url?: string;
    public threshold?: number;
    public constructor() { 
    }
    public withImage(image: string): RecaptureDetectReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): RecaptureDetectReq {
        this['url'] = url;
        return this;
    }
    public withThreshold(threshold: number): RecaptureDetectReq {
        this['threshold'] = threshold;
        return this;
    }
}