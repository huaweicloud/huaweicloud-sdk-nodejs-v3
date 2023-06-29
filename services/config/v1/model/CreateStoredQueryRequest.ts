import { StoredQueryRequestBody } from './StoredQueryRequestBody';


export class CreateStoredQueryRequest {
    public body?: StoredQueryRequestBody;
    public constructor() { 
    }
    public withBody(body: StoredQueryRequestBody): CreateStoredQueryRequest {
        this['body'] = body;
        return this;
    }
}