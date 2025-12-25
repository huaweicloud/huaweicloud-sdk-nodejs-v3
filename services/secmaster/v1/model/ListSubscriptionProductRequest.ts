

export class ListSubscriptionProductRequest {
    private 'X-Language'?: string;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): ListSubscriptionProductRequest {
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