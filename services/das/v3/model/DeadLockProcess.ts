

export class DeadLockProcess {
    public spid?: string;
    private 'process_id'?: string;
    private 'host_name'?: string;
    private 'login_name'?: string;
    private 'log_used'?: number;
    public sql?: string;
    public constructor() { 
    }
    public withSpid(spid: string): DeadLockProcess {
        this['spid'] = spid;
        return this;
    }
    public withProcessId(processId: string): DeadLockProcess {
        this['process_id'] = processId;
        return this;
    }
    public set processId(processId: string  | undefined) {
        this['process_id'] = processId;
    }
    public get processId(): string | undefined {
        return this['process_id'];
    }
    public withHostName(hostName: string): DeadLockProcess {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withLoginName(loginName: string): DeadLockProcess {
        this['login_name'] = loginName;
        return this;
    }
    public set loginName(loginName: string  | undefined) {
        this['login_name'] = loginName;
    }
    public get loginName(): string | undefined {
        return this['login_name'];
    }
    public withLogUsed(logUsed: number): DeadLockProcess {
        this['log_used'] = logUsed;
        return this;
    }
    public set logUsed(logUsed: number  | undefined) {
        this['log_used'] = logUsed;
    }
    public get logUsed(): number | undefined {
        return this['log_used'];
    }
    public withSql(sql: string): DeadLockProcess {
        this['sql'] = sql;
        return this;
    }
}