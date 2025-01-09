

export class AdOuUserInfo {
    private 'user_name'?: string;
    private 'expired_time'?: string;
    private 'has_existed'?: boolean;
    public constructor() { 
    }
    public withUserName(userName: string): AdOuUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withExpiredTime(expiredTime: string): AdOuUserInfo {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: string  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): string | undefined {
        return this['expired_time'];
    }
    public withHasExisted(hasExisted: boolean): AdOuUserInfo {
        this['has_existed'] = hasExisted;
        return this;
    }
    public set hasExisted(hasExisted: boolean  | undefined) {
        this['has_existed'] = hasExisted;
    }
    public get hasExisted(): boolean | undefined {
        return this['has_existed'];
    }
}