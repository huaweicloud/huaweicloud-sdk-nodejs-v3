

export class ImageMediaTaggingReq {
    public image?: string;
    public url?: string;
    public language?: string;
    public threshold?: number;
    public limit?: number;
    private 'use_default_tags'?: string;
    public constructor() { 
    }
    public withImage(image: string): ImageMediaTaggingReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ImageMediaTaggingReq {
        this['url'] = url;
        return this;
    }
    public withLanguage(language: string): ImageMediaTaggingReq {
        this['language'] = language;
        return this;
    }
    public withThreshold(threshold: number): ImageMediaTaggingReq {
        this['threshold'] = threshold;
        return this;
    }
    public withLimit(limit: number): ImageMediaTaggingReq {
        this['limit'] = limit;
        return this;
    }
    public withUseDefaultTags(useDefaultTags: string): ImageMediaTaggingReq {
        this['use_default_tags'] = useDefaultTags;
        return this;
    }
    public set useDefaultTags(useDefaultTags: string  | undefined) {
        this['use_default_tags'] = useDefaultTags;
    }
    public get useDefaultTags(): string | undefined {
        return this['use_default_tags'];
    }
}