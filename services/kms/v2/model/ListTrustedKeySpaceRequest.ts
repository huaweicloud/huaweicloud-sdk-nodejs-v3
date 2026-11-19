

export class ListTrustedKeySpaceRequest {
    public limit?: string;
    public marker?: string;
    private 'keyspace_id'?: string;
    public type?: number;
    public constructor() { 
    }
    public withLimit(limit: string): ListTrustedKeySpaceRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTrustedKeySpaceRequest {
        this['marker'] = marker;
        return this;
    }
    public withKeyspaceId(keyspaceId: string): ListTrustedKeySpaceRequest {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withType(type: number): ListTrustedKeySpaceRequest {
        this['type'] = type;
        return this;
    }
}