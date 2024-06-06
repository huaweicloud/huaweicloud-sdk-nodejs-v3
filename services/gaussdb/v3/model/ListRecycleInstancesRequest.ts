

export class ListRecycleInstancesRequest {
    private 'X-Language'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListRecycleInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ListRecycleInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRecycleInstancesRequest {
        this['offset'] = offset;
        return this;
    }
}