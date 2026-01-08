

export class ExportIpTemplateRequest {
    public language?: string;
    public constructor() { 
    }
    public withLanguage(language: string): ExportIpTemplateRequest {
        this['language'] = language;
        return this;
    }
}