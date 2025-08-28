

export class PhysicalProcessInfo {
    public id?: number;
    public user?: string;
    public host?: string;
    public db?: string;
    public state?: string;
    public command?: string;
    public info?: string;
    public time?: number;
    private 'trx_executed_time'?: number;
    public constructor() { 
    }
    public withId(id: number): PhysicalProcessInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): PhysicalProcessInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): PhysicalProcessInfo {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): PhysicalProcessInfo {
        this['db'] = db;
        return this;
    }
    public withState(state: string): PhysicalProcessInfo {
        this['state'] = state;
        return this;
    }
    public withCommand(command: string): PhysicalProcessInfo {
        this['command'] = command;
        return this;
    }
    public withInfo(info: string): PhysicalProcessInfo {
        this['info'] = info;
        return this;
    }
    public withTime(time: number): PhysicalProcessInfo {
        this['time'] = time;
        return this;
    }
    public withTrxExecutedTime(trxExecutedTime: number): PhysicalProcessInfo {
        this['trx_executed_time'] = trxExecutedTime;
        return this;
    }
    public set trxExecutedTime(trxExecutedTime: number  | undefined) {
        this['trx_executed_time'] = trxExecutedTime;
    }
    public get trxExecutedTime(): number | undefined {
        return this['trx_executed_time'];
    }
}