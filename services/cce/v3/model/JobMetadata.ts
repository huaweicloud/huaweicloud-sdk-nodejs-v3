

export class JobMetadata {
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): JobMetadata {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): JobMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): JobMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}