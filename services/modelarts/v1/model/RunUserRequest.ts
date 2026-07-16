

export class RunUserRequest {
    public uid?: number;
    public gid?: number;
    public constructor() { 
    }
    public withUid(uid: number): RunUserRequest {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): RunUserRequest {
        this['gid'] = gid;
        return this;
    }
}