

export class ShowRecyclePolicyRequest {
    private 'X-Language'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowRecyclePolicyRequest {
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