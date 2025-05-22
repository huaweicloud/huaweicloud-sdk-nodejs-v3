

export class UpdateUserNickNameRequestV4 {
    private 'nick_name'?: string;
    public constructor(nickName?: string) { 
        this['nick_name'] = nickName;
    }
    public withNickName(nickName: string): UpdateUserNickNameRequestV4 {
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