

export class ImageMainObjectDetectionReq {
    public image?: string;
    public url?: string;
    public threshold?: number;
    public constructor() { 
    }
    public withImage(image: string): ImageMainObjectDetectionReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ImageMainObjectDetectionReq {
        this['url'] = url;
        return this;
    }
    public withThreshold(threshold: number): ImageMainObjectDetectionReq {
        this['threshold'] = threshold;
        return this;
    }
}