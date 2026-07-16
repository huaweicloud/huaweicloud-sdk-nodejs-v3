

export class RunUserInfo {
    public uid?: number;
    public gid?: number;
    private 'user_name'?: string;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withUid(uid: number): RunUserInfo {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): RunUserInfo {
        this['gid'] = gid;
        return this;
    }
    public withUserName(userName: string): RunUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withGroupName(groupName: string): RunUserInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}