

export class ImageMediaTaggingItemBodyI18nTag {
    public zh?: string;
    public en?: string;
    public constructor() { 
    }
    public withZh(zh: string): ImageMediaTaggingItemBodyI18nTag {
        this['zh'] = zh;
        return this;
    }
    public withEn(en: string): ImageMediaTaggingItemBodyI18nTag {
        this['en'] = en;
        return this;
    }
}