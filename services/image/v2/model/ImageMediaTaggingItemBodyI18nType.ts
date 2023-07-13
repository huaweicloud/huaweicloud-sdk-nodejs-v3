

export class ImageMediaTaggingItemBodyI18nType {
    public zh?: string;
    public en?: string;
    public constructor() { 
    }
    public withZh(zh: string): ImageMediaTaggingItemBodyI18nType {
        this['zh'] = zh;
        return this;
    }
    public withEn(en: string): ImageMediaTaggingItemBodyI18nType {
        this['en'] = en;
        return this;
    }
}