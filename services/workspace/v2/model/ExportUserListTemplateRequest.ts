

export class ExportUserListTemplateRequest {
    public language?: string;
    private 'os_type'?: string;
    public constructor() { 
    }
    public withLanguage(language: string): ExportUserListTemplateRequest {
        this['language'] = language;
        return this;
    }
    public withOsType(osType: string): ExportUserListTemplateRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
}