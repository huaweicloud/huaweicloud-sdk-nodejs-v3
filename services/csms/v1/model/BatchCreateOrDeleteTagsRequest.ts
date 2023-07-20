import { BatchCreateOrDeleteTagsRequestBody } from './BatchCreateOrDeleteTagsRequestBody';


export class BatchCreateOrDeleteTagsRequest {
    private 'secret_id'?: string;
    public body?: BatchCreateOrDeleteTagsRequestBody;
    public constructor(secretId?: string) { 
        this['secret_id'] = secretId;
    }
    public withSecretId(secretId: string): BatchCreateOrDeleteTagsRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
    public withBody(body: BatchCreateOrDeleteTagsRequestBody): BatchCreateOrDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}