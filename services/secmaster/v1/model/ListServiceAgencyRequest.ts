

export class ListServiceAgencyRequest {
    private 'X-Language'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListServiceAgencyRequest {
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