

export class ImageTaggingReq {
    public image?: string;
    public url?: string;
    public language?: string;
    public threshold?: number;
    public limit?: number;
    public constructor() { 
    }
    public withImage(image: string): ImageTaggingReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ImageTaggingReq {
        this['url'] = url;
        return this;
    }
    public withLanguage(language: string): ImageTaggingReq {
        this['language'] = language;
        return this;
    }
    public withThreshold(threshold: number): ImageTaggingReq {
        this['threshold'] = threshold;
        return this;
    }
    public withLimit(limit: number): ImageTaggingReq {
        this['limit'] = limit;
        return this;
    }
}