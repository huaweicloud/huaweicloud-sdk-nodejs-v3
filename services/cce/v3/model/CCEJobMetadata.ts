

export class CCEJobMetadata {
    public creationTimestamp?: string;
    public uid?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withCreationTimestamp(creationTimestamp: string): CCEJobMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUid(uid: string): CCEJobMetadata {
        this['uid'] = uid;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): CCEJobMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}