

export class I18nDescription {
    public language?: string;
    public description?: string;
    public constructor() { 
    }
    public withLanguage(language: string): I18nDescription {
        this['language'] = language;
        return this;
    }
    public withDescription(description: string): I18nDescription {
        this['description'] = description;
        return this;
    }
}