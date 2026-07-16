

export class ParameterI18nDescription {
    public language?: string;
    public description?: string;
    public constructor() { 
    }
    public withLanguage(language: string): ParameterI18nDescription {
        this['language'] = language;
        return this;
    }
    public withDescription(description: string): ParameterI18nDescription {
        this['description'] = description;
        return this;
    }
}