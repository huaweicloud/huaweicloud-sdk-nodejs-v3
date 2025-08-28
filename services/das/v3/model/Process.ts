

export class Process {
    public id?: string;
    public user?: string;
    public host?: string;
    public database?: string;
    public command?: string;
    public time?: string;
    public state?: string;
    public sql?: string;
    private 'trx_executed_time'?: string;
    public constructor(id?: string, user?: string, host?: string, database?: string, command?: string, time?: string, state?: string, sql?: string, trxExecutedTime?: string) { 
        this['id'] = id;
        this['user'] = user;
        this['host'] = host;
        this['database'] = database;
        this['command'] = command;
        this['time'] = time;
        this['state'] = state;
        this['sql'] = sql;
        this['trx_executed_time'] = trxExecutedTime;
    }
    public withId(id: string): Process {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): Process {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): Process {
        this['host'] = host;
        return this;
    }
    public withDatabase(database: string): Process {
        this['database'] = database;
        return this;
    }
    public withCommand(command: string): Process {
        this['command'] = command;
        return this;
    }
    public withTime(time: string): Process {
        this['time'] = time;
        return this;
    }
    public withState(state: string): Process {
        this['state'] = state;
        return this;
    }
    public withSql(sql: string): Process {
        this['sql'] = sql;
        return this;
    }
    public withTrxExecutedTime(trxExecutedTime: string): Process {
        this['trx_executed_time'] = trxExecutedTime;
        return this;
    }
    public set trxExecutedTime(trxExecutedTime: string  | undefined) {
        this['trx_executed_time'] = trxExecutedTime;
    }
    public get trxExecutedTime(): string | undefined {
        return this['trx_executed_time'];
    }
}