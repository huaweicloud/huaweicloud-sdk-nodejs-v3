

export class UpdateChildUserNickNameRequestBody {
    private 'nick_name'?: string;
    private 'user_id'?: string;
    public constructor(nickName?: string, userId?: string) { 
        this['nick_name'] = nickName;
        this['user_id'] = userId;
    }
    public withNickName(nickName: string): UpdateChildUserNickNameRequestBody {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withUserId(userId: string): UpdateChildUserNickNameRequestBody {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}