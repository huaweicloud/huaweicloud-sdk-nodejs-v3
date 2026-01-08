

export class ExportUsersTemplateRequest {
    public language?: string;
    private 'active_type'?: string;
    public constructor() { 
    }
    public withLanguage(language: string): ExportUsersTemplateRequest {
        this['language'] = language;
        return this;
    }
    public withActiveType(activeType: string): ExportUsersTemplateRequest {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): string | undefined {
        return this['active_type'];
    }
}