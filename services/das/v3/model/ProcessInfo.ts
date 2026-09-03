

export class ProcessInfo {
    public id?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public time?: string;
    public state?: string;
    public info?: string;
    private 'trx_duration'?: string;
    public constructor() { 
    }
    public withId(id: string): ProcessInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): ProcessInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): ProcessInfo {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): ProcessInfo {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): ProcessInfo {
        this['command'] = command;
        return this;
    }
    public withTime(time: string): ProcessInfo {
        this['time'] = time;
        return this;
    }
    public withState(state: string): ProcessInfo {
        this['state'] = state;
        return this;
    }
    public withInfo(info: string): ProcessInfo {
        this['info'] = info;
        return this;
    }
    public withTrxDuration(trxDuration: string): ProcessInfo {
        this['trx_duration'] = trxDuration;
        return this;
    }
    public set trxDuration(trxDuration: string  | undefined) {
        this['trx_duration'] = trxDuration;
    }
    public get trxDuration(): string | undefined {
        return this['trx_duration'];
    }
}