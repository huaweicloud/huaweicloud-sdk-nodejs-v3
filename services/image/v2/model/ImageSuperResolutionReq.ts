

export class ImageSuperResolutionReq {
    public image?: string;
    public url?: string;
    public scale?: number;
    public constructor() { 
    }
    public withImage(image: string): ImageSuperResolutionReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ImageSuperResolutionReq {
        this['url'] = url;
        return this;
    }
    public withScale(scale: number): ImageSuperResolutionReq {
        this['scale'] = scale;
        return this;
    }
}