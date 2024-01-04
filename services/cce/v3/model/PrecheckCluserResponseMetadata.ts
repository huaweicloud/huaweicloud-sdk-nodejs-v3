

export class PrecheckCluserResponseMetadata {
    public uid?: string;
    public constructor() { 
    }
    public withUid(uid: string): PrecheckCluserResponseMetadata {
        this['uid'] = uid;
        return this;
    }
}