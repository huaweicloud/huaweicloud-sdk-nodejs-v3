

export class ImageTaggingItemBodyI18nType {
    public zh?: string;
    public en?: string;
    public constructor() { 
    }
    public withZh(zh: string): ImageTaggingItemBodyI18nType {
        this['zh'] = zh;
        return this;
    }
    public withEn(en: string): ImageTaggingItemBodyI18nType {
        this['en'] = en;
        return this;
    }
}