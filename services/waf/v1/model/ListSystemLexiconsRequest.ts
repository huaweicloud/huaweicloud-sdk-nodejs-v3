

export class ListSystemLexiconsRequest {
    private 'X-Language'?: string;
    private 'Content-Type'?: string;
    public type?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withXLanguage(xLanguage: string): ListSystemLexiconsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): ListSystemLexiconsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withType(type: string): ListSystemLexiconsRequest {
        this['type'] = type;
        return this;
    }
}