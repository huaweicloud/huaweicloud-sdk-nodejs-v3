import { BatchUnBindApiKeyRequestKeyIds } from './BatchUnBindApiKeyRequestKeyIds';


export class BatchUnBindApiKeyRequest {
    private 'key_ids'?: Array<BatchUnBindApiKeyRequestKeyIds>;
    public constructor(keyIds?: Array<BatchUnBindApiKeyRequestKeyIds>) { 
        this['key_ids'] = keyIds;
    }
    public withKeyIds(keyIds: Array<BatchUnBindApiKeyRequestKeyIds>): BatchUnBindApiKeyRequest {
        this['key_ids'] = keyIds;
        return this;
    }
    public set keyIds(keyIds: Array<BatchUnBindApiKeyRequestKeyIds>  | undefined) {
        this['key_ids'] = keyIds;
    }
    public get keyIds(): Array<BatchUnBindApiKeyRequestKeyIds> | undefined {
        return this['key_ids'];
    }
}