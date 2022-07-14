

export class ImageMediaTaggingReq {
    public image?: string;
    public url?: string;
    public language?: string;
    public threshold?: number;
    public limit?: number;
    private 'custom_tags'?: Array<string> | undefined;
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
    public withCustomTags(customTags: Array<string>): ImageMediaTaggingReq {
        this['custom_tags'] = customTags;
        return this;
    }
    public set customTags(customTags: Array<string> | undefined) {
        this['custom_tags'] = customTags;
    }
    public get customTags() {
        return this['custom_tags'];
    }
}