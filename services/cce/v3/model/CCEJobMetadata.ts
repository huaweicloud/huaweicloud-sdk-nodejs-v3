

export class CCEJobMetadata {
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): CCEJobMetadata {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): CCEJobMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): CCEJobMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}