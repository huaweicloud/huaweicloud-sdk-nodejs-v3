

export class CelebrityRecognitionReq {
    public image?: string;
    public url?: string;
    public threshold?: number;
    public constructor() { 
    }
    public withImage(image: string): CelebrityRecognitionReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): CelebrityRecognitionReq {
        this['url'] = url;
        return this;
    }
    public withThreshold(threshold: number): CelebrityRecognitionReq {
        this['threshold'] = threshold;
        return this;
    }
}