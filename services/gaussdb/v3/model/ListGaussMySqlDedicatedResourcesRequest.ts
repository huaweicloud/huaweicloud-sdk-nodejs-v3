

export class ListGaussMySqlDedicatedResourcesRequest {
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListGaussMySqlDedicatedResourcesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListGaussMySqlDedicatedResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGaussMySqlDedicatedResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}