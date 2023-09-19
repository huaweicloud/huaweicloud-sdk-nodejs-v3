

export class ListSnapshotBackupsDatastoreResp {
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: string): ListSnapshotBackupsDatastoreResp {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListSnapshotBackupsDatastoreResp {
        this['version'] = version;
        return this;
    }
}