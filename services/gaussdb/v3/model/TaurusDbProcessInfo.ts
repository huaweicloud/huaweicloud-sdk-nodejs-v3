

export class TaurusDbProcessInfo {
    public id?: number;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public time?: number;
    public state?: string;
    public info?: string;
    public constructor(id?: number, user?: string, host?: string, db?: string, command?: string, time?: number, state?: string, info?: string) { 
        this['id'] = id;
        this['user'] = user;
        this['host'] = host;
        this['db'] = db;
        this['command'] = command;
        this['time'] = time;
        this['state'] = state;
        this['info'] = info;
    }
    public withId(id: number): TaurusDbProcessInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): TaurusDbProcessInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): TaurusDbProcessInfo {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): TaurusDbProcessInfo {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): TaurusDbProcessInfo {
        this['command'] = command;
        return this;
    }
    public withTime(time: number): TaurusDbProcessInfo {
        this['time'] = time;
        return this;
    }
    public withState(state: string): TaurusDbProcessInfo {
        this['state'] = state;
        return this;
    }
    public withInfo(info: string): TaurusDbProcessInfo {
        this['info'] = info;
        return this;
    }
}