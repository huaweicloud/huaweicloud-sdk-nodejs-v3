

export class V2JobTypeObject {
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): V2JobTypeObject {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): V2JobTypeObject {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): V2JobTypeObject {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}