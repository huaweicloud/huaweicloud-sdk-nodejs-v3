

export class UpgradeTaskMetadata {
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): UpgradeTaskMetadata {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): UpgradeTaskMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): UpgradeTaskMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}