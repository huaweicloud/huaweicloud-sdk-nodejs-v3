

export class ListBuiltInPolicyDefinitionsRequest {
    private 'X-Language'?: string;
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
}