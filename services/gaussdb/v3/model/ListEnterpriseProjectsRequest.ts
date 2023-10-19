

export class ListEnterpriseProjectsRequest {
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListEnterpriseProjectsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListEnterpriseProjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnterpriseProjectsRequest {
        this['limit'] = limit;
        return this;
    }
}