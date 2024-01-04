

export class PostcheckCluserResponseMetadata {
    public uid?: string;
    public constructor() { 
    }
    public withUid(uid: string): PostcheckCluserResponseMetadata {
        this['uid'] = uid;
        return this;
    }
}