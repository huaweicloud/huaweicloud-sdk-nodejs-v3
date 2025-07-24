

export class CreateInfoVo {
    public time?: string;
    public timestamp?: number;
    private 'user_id'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withTime(time: string): CreateInfoVo {
        this['time'] = time;
        return this;
    }
    public withTimestamp(timestamp: number): CreateInfoVo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withUserId(userId: string): CreateInfoVo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): CreateInfoVo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}