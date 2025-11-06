

export class ApprovalMergeRequestApproversItem {
    public id?: number;
    public name?: string;
    private 'nick_name'?: string;
    public state?: string;
    public username?: string;
    public constructor() { 
    }
    public withId(id: number): ApprovalMergeRequestApproversItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApprovalMergeRequestApproversItem {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): ApprovalMergeRequestApproversItem {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withState(state: string): ApprovalMergeRequestApproversItem {
        this['state'] = state;
        return this;
    }
    public withUsername(username: string): ApprovalMergeRequestApproversItem {
        this['username'] = username;
        return this;
    }
}