

export class ConnSharedInfo {
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'shared_time'?: number;
    private 'expired_time'?: number;
    public constructor() { 
    }
    public withUserId(userId: string): ConnSharedInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ConnSharedInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSharedTime(sharedTime: number): ConnSharedInfo {
        this['shared_time'] = sharedTime;
        return this;
    }
    public set sharedTime(sharedTime: number  | undefined) {
        this['shared_time'] = sharedTime;
    }
    public get sharedTime(): number | undefined {
        return this['shared_time'];
    }
    public withExpiredTime(expiredTime: number): ConnSharedInfo {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: number  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): number | undefined {
        return this['expired_time'];
    }
}