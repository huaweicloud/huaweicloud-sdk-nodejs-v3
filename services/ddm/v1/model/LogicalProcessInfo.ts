

export class LogicalProcessInfo {
    public id?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public time?: string;
    public state?: string;
    public info?: string;
    public constructor() { 
    }
    public withId(id: string): LogicalProcessInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): LogicalProcessInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): LogicalProcessInfo {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): LogicalProcessInfo {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): LogicalProcessInfo {
        this['command'] = command;
        return this;
    }
    public withTime(time: string): LogicalProcessInfo {
        this['time'] = time;
        return this;
    }
    public withState(state: string): LogicalProcessInfo {
        this['state'] = state;
        return this;
    }
    public withInfo(info: string): LogicalProcessInfo {
        this['info'] = info;
        return this;
    }
}