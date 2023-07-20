

export class ShowStoredQueryRequest {
    private 'query_id'?: string;
    public constructor(queryId?: string) { 
        this['query_id'] = queryId;
    }
    public withQueryId(queryId: string): ShowStoredQueryRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
}