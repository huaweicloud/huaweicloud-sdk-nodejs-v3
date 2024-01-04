

export class PrecheckTaskMetadata {
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): PrecheckTaskMetadata {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): PrecheckTaskMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): PrecheckTaskMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}