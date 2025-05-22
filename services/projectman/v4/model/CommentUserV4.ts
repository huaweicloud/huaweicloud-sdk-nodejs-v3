

export class CommentUserV4 {
    private 'user_num_id'?: number;
    private 'user_name'?: string;
    private 'nick_name'?: string;
    public constructor() { 
    }
    public withUserNumId(userNumId: number): CommentUserV4 {
        this['user_num_id'] = userNumId;
        return this;
    }
    public set userNumId(userNumId: number  | undefined) {
        this['user_num_id'] = userNumId;
    }
    public get userNumId(): number | undefined {
        return this['user_num_id'];
    }
    public withUserName(userName: string): CommentUserV4 {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withNickName(nickName: string): CommentUserV4 {
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