

export class GrantUserInfo {
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'create_time'?: number;
    private 'validity_time'?: number;
    public constructor(userId?: string, userName?: string, createTime?: number) { 
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['create_time'] = createTime;
    }
    public withUserId(userId: string): GrantUserInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): GrantUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCreateTime(createTime: number): GrantUserInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withValidityTime(validityTime: number): GrantUserInfo {
        this['validity_time'] = validityTime;
        return this;
    }
    public set validityTime(validityTime: number  | undefined) {
        this['validity_time'] = validityTime;
    }
    public get validityTime(): number | undefined {
        return this['validity_time'];
    }
}