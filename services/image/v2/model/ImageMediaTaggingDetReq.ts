

export class ImageMediaTaggingDetReq {
    public image?: string;
    public url?: string;
    public language?: string;
    public threshold?: number;
    public limit?: number;
    public constructor() { 
    }
    public withImage(image: string): ImageMediaTaggingDetReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ImageMediaTaggingDetReq {
        this['url'] = url;
        return this;
    }
    public withLanguage(language: string): ImageMediaTaggingDetReq {
        this['language'] = language;
        return this;
    }
    public withThreshold(threshold: number): ImageMediaTaggingDetReq {
        this['threshold'] = threshold;
        return this;
    }
    public withLimit(limit: number): ImageMediaTaggingDetReq {
        this['limit'] = limit;
        return this;
    }
}