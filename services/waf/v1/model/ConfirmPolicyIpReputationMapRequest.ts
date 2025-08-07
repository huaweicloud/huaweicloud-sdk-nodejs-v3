

export class ConfirmPolicyIpReputationMapRequest {
    private 'Content-Type'?: string;
    public lang?: string;
    public type?: string;
    public constructor(contentType?: string, lang?: string, type?: string) { 
        this['Content-Type'] = contentType;
        this['lang'] = lang;
        this['type'] = type;
    }
    public withContentType(contentType: string): ConfirmPolicyIpReputationMapRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLang(lang: string): ConfirmPolicyIpReputationMapRequest {
        this['lang'] = lang;
        return this;
    }
    public withType(type: string): ConfirmPolicyIpReputationMapRequest {
        this['type'] = type;
        return this;
    }
}