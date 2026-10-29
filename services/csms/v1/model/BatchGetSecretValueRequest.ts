import { BatchGetSecretValueRequestBody } from './BatchGetSecretValueRequestBody';


export class BatchGetSecretValueRequest {
    public body?: BatchGetSecretValueRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchGetSecretValueRequestBody): BatchGetSecretValueRequest {
        this['body'] = body;
        return this;
    }
}