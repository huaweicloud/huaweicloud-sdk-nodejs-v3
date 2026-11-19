

export class ShowKeyUsageFlowRequest {
    private 'keyspace_id'?: string;
    private 'key_id'?: string;
    public constructor(keyspaceId?: string, keyId?: string) { 
        this['keyspace_id'] = keyspaceId;
        this['key_id'] = keyId;
    }
    public withKeyspaceId(keyspaceId: string): ShowKeyUsageFlowRequest {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withKeyId(keyId: string): ShowKeyUsageFlowRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
}