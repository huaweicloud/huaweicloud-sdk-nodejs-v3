

export class ListAiGuardPolicyRequest {
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListAiGuardPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): ListAiGuardPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAiGuardPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListAiGuardPolicyRequest {
        this['name'] = name;
        return this;
    }
}