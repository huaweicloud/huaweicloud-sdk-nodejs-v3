import { ReplicateKeyRequestBody } from './ReplicateKeyRequestBody';


export class ReplicateKeyRequest {
    private 'key_id'?: string;
    public body?: ReplicateKeyRequestBody;
    public constructor(keyId?: string) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): ReplicateKeyRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withBody(body: ReplicateKeyRequestBody): ReplicateKeyRequest {
        this['body'] = body;
        return this;
    }
}