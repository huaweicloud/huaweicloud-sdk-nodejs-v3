

export class SnapshotCluserResponseMetadata {
    public apiVersion?: string;
    public kind?: string;
    public constructor() { 
    }
    public withApiVersion(apiVersion: string): SnapshotCluserResponseMetadata {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): SnapshotCluserResponseMetadata {
        this['kind'] = kind;
        return this;
    }
}