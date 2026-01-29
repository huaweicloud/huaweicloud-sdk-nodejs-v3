

export class UserVO {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'nick_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'user_num_id'?: number;
    public constructor() { 
    }
    public withDomainId(domainId: string): UserVO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): UserVO {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withNickName(nickName: string): UserVO {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withUserId(userId: string): UserVO {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): UserVO {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserNumId(userNumId: number): UserVO {
        this['user_num_id'] = userNumId;
        return this;
    }
    public set userNumId(userNumId: number  | undefined) {
        this['user_num_id'] = userNumId;
    }
    public get userNumId(): number | undefined {
        return this['user_num_id'];
    }
}