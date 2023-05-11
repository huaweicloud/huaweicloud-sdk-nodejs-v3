import { StoredQueryRequestBody } from './StoredQueryRequestBody';


export class UpdateStoredQueryRequest {
    private 'query_id': string | undefined;
    public body?: StoredQueryRequestBody;
    public constructor(queryId?: any) { 
        this['query_id'] = queryId;
    }
    public withQueryId(queryId: string): UpdateStoredQueryRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId() {
        return this['query_id'];
    }
    public withBody(body: StoredQueryRequestBody): UpdateStoredQueryRequest {
        this['body'] = body;
        return this;
    }
}