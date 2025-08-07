

export class ListBusinessPartnersRequest {
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListBusinessPartnersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListBusinessPartnersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBusinessPartnersRequest {
        this['limit'] = limit;
        return this;
    }
}