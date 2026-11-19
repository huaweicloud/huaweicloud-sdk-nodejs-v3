

export class DeleteTrustedKeySpaceRequest {
    private 'keyspace_id'?: string;
    public constructor(keyspaceId?: string) { 
        this['keyspace_id'] = keyspaceId;
    }
    public withKeyspaceId(keyspaceId: string): DeleteTrustedKeySpaceRequest {
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