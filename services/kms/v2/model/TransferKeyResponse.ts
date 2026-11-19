
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferKeyResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'keyspace_id'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): TransferKeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyspaceId(keyspaceId: string): TransferKeyResponse {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
}