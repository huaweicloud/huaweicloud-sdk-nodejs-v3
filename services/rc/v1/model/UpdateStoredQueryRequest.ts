import { StoredQueryRequestBody } from './StoredQueryRequestBody';


export class UpdateStoredQueryRequest {
    private 'query_id'?: string;
    public body?: StoredQueryRequestBody;
    public constructor(queryId?: string) { 
        this['query_id'] = queryId;
    }
    public withQueryId(queryId: string): UpdateStoredQueryRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withBody(body: StoredQueryRequestBody): UpdateStoredQueryRequest {
        this['body'] = body;
        return this;
    }
}