

export class PgProcessInfo {
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
    public withId(id: string): PgProcessInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): PgProcessInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): PgProcessInfo {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): PgProcessInfo {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): PgProcessInfo {
        this['command'] = command;
        return this;
    }
    public withTime(time: string): PgProcessInfo {
        this['time'] = time;
        return this;
    }
    public withState(state: string): PgProcessInfo {
        this['state'] = state;
        return this;
    }
    public withInfo(info: string): PgProcessInfo {
        this['info'] = info;
        return this;
    }
    public withTrxDuration(trxDuration: string): PgProcessInfo {
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