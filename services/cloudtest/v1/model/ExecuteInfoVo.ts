

export class ExecuteInfoVo {
    public time?: string;
    public timestamp?: number;
    public duration?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'execute_times'?: number;
    public constructor() { 
    }
    public withTime(time: string): ExecuteInfoVo {
        this['time'] = time;
        return this;
    }
    public withTimestamp(timestamp: number): ExecuteInfoVo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDuration(duration: string): ExecuteInfoVo {
        this['duration'] = duration;
        return this;
    }
    public withUserId(userId: string): ExecuteInfoVo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ExecuteInfoVo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withExecuteTimes(executeTimes: number): ExecuteInfoVo {
        this['execute_times'] = executeTimes;
        return this;
    }
    public set executeTimes(executeTimes: number  | undefined) {
        this['execute_times'] = executeTimes;
    }
    public get executeTimes(): number | undefined {
        return this['execute_times'];
    }
}