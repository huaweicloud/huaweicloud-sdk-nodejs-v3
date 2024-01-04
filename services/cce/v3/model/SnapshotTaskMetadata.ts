

export class SnapshotTaskMetadata {
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): SnapshotTaskMetadata {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): SnapshotTaskMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): SnapshotTaskMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}