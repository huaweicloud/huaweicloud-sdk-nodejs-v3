import { BatchBindApiKeyRequestKeyIds } from './BatchBindApiKeyRequestKeyIds';


export class BatchBindApiKeyRequest {
    private 'key_ids'?: Array<BatchBindApiKeyRequestKeyIds>;
    public constructor(keyIds?: Array<BatchBindApiKeyRequestKeyIds>) { 
        this['key_ids'] = keyIds;
    }
    public withKeyIds(keyIds: Array<BatchBindApiKeyRequestKeyIds>): BatchBindApiKeyRequest {
        this['key_ids'] = keyIds;
        return this;
    }
    public set keyIds(keyIds: Array<BatchBindApiKeyRequestKeyIds>  | undefined) {
        this['key_ids'] = keyIds;
    }
    public get keyIds(): Array<BatchBindApiKeyRequestKeyIds> | undefined {
        return this['key_ids'];
    }
}