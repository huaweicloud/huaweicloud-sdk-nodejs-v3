

export class ImageTaggingItemBodyI18nTag {
    public zh?: string;
    public en?: string;
    public constructor() { 
    }
    public withZh(zh: string): ImageTaggingItemBodyI18nTag {
        this['zh'] = zh;
        return this;
    }
    public withEn(en: string): ImageTaggingItemBodyI18nTag {
        this['en'] = en;
        return this;
    }
}