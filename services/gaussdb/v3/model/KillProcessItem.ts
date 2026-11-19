

export class KillProcessItem {
    public id?: string;
    private 'instance_id'?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public info?: string;
    public time?: string;
    private 'end_time'?: string;
    public mode?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): KillProcessItem {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): KillProcessItem {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUser(user: string): KillProcessItem {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): KillProcessItem {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): KillProcessItem {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): KillProcessItem {
        this['command'] = command;
        return this;
    }
    public withInfo(info: string): KillProcessItem {
        this['info'] = info;
        return this;
    }
    public withTime(time: string): KillProcessItem {
        this['time'] = time;
        return this;
    }
    public withEndTime(endTime: string): KillProcessItem {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMode(mode: string): KillProcessItem {
        this['mode'] = mode;
        return this;
    }
    public withStatus(status: string): KillProcessItem {
        this['status'] = status;
        return this;
    }
}