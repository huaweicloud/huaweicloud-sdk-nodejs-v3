

export class KillProcessTaskReq {
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public info?: string;
    public time?: string;
    private 'end_time'?: string;
    public mode?: string;
    public constructor(time?: string, mode?: string) { 
        this['time'] = time;
        this['mode'] = mode;
    }
    public withUser(user: string): KillProcessTaskReq {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): KillProcessTaskReq {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): KillProcessTaskReq {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): KillProcessTaskReq {
        this['command'] = command;
        return this;
    }
    public withInfo(info: string): KillProcessTaskReq {
        this['info'] = info;
        return this;
    }
    public withTime(time: string): KillProcessTaskReq {
        this['time'] = time;
        return this;
    }
    public withEndTime(endTime: string): KillProcessTaskReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMode(mode: string): KillProcessTaskReq {
        this['mode'] = mode;
        return this;
    }
}