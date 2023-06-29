

export class ListBuiltInPolicyDefinitionsRequest {
    private 'X-Language'?: string | undefined;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListBuiltInPolicyDefinitionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
}