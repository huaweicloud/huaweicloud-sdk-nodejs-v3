

export class ShowTenantAccessInfoRequest {
    private 'x-language'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowTenantAccessInfoRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['x-language'];
    }
}