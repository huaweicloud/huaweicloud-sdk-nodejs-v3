

export class ListKeyPolicyRequest {
    private 'keyspace_id'?: string;
    public limit?: string;
    public marker?: string;
    public constructor(keyspaceId?: string) { 
        this['keyspace_id'] = keyspaceId;
    }
    public withKeyspaceId(keyspaceId: string): ListKeyPolicyRequest {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withLimit(limit: string): ListKeyPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListKeyPolicyRequest {
        this['marker'] = marker;
        return this;
    }
}