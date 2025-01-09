

export class I18nLanguage {
    public language?: string;
    public value?: string;
    public constructor() { 
    }
    public withLanguage(language: string): I18nLanguage {
        this['language'] = language;
        return this;
    }
    public withValue(value: string): I18nLanguage {
        this['value'] = value;
        return this;
    }
}