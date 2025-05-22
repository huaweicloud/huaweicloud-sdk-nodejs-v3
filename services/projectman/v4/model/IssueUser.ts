

export class IssueUser {
    private 'user_id'?: string;
    private 'user_num_id'?: number;
    public id?: number;
    public name?: string;
    private 'nick_name'?: string;
    public constructor() { 
    }
    public withUserId(userId: string): IssueUser {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserNumId(userNumId: number): IssueUser {
        this['user_num_id'] = userNumId;
        return this;
    }
    public set userNumId(userNumId: number  | undefined) {
        this['user_num_id'] = userNumId;
    }
    public get userNumId(): number | undefined {
        return this['user_num_id'];
    }
    public withId(id: number): IssueUser {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueUser {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): IssueUser {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
}