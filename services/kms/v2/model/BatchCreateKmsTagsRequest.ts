import { BatchCreateKmsTagsRequestBody } from './BatchCreateKmsTagsRequestBody';


export class BatchCreateKmsTagsRequest {
    private 'key_id'?: string;
    public body?: BatchCreateKmsTagsRequestBody;
    public constructor(keyId?: string) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): BatchCreateKmsTagsRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withBody(body: BatchCreateKmsTagsRequestBody): BatchCreateKmsTagsRequest {
        this['body'] = body;
        return this;
    }
}