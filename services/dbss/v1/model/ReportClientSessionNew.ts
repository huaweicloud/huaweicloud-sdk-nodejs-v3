

export class ReportClientSessionNew {
    private 'db_id'?: string;
    private 'db_ip'?: string;
    private 'db_name'?: string;
    private 'session_num'?: number;
    public constructor() { 
    }
    public withDbId(dbId: string): ReportClientSessionNew {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withDbIp(dbIp: string): ReportClientSessionNew {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbName(dbName: string): ReportClientSessionNew {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSessionNum(sessionNum: number): ReportClientSessionNew {
        this['session_num'] = sessionNum;
        return this;
    }
    public set sessionNum(sessionNum: number  | undefined) {
        this['session_num'] = sessionNum;
    }
    public get sessionNum(): number | undefined {
        return this['session_num'];
    }
}