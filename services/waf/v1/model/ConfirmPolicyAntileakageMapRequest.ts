

export class ConfirmPolicyAntileakageMapRequest {
    private 'Content-Type'?: string;
    public lang?: string;
    public constructor(contentType?: string, lang?: string) { 
        this['Content-Type'] = contentType;
        this['lang'] = lang;
    }
    public withContentType(contentType: string): ConfirmPolicyAntileakageMapRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLang(lang: string): ConfirmPolicyAntileakageMapRequest {
        this['lang'] = lang;
        return this;
    }
}