

export class ListBuiltInPolicyDefinitionsRequest {
    private 'X-Language'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListBuiltInPolicyDefinitionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ListBuiltInPolicyDefinitionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBuiltInPolicyDefinitionsRequest {
        this['marker'] = marker;
        return this;
    }
}