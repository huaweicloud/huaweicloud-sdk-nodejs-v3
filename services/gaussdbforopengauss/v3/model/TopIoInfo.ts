

export class TopIoInfo {
    private 'thread_id'?: string;
    private 'thread_type'?: TopIoInfoThreadTypeEnum | string;
    private 'disk_read_rate'?: number;
    private 'disk_write_rate'?: number;
    private 'session_id'?: string;
    private 'unique_sql_id'?: string;
    private 'database_name'?: string;
    private 'client_ip'?: string;
    private 'user_name'?: string;
    public state?: string;
    private 'sql_start'?: number;
    public constructor() { 
    }
    public withThreadId(threadId: string): TopIoInfo {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withThreadType(threadType: TopIoInfoThreadTypeEnum | string): TopIoInfo {
        this['thread_type'] = threadType;
        return this;
    }
    public set threadType(threadType: TopIoInfoThreadTypeEnum | string  | undefined) {
        this['thread_type'] = threadType;
    }
    public get threadType(): TopIoInfoThreadTypeEnum | string | undefined {
        return this['thread_type'];
    }
    public withDiskReadRate(diskReadRate: number): TopIoInfo {
        this['disk_read_rate'] = diskReadRate;
        return this;
    }
    public set diskReadRate(diskReadRate: number  | undefined) {
        this['disk_read_rate'] = diskReadRate;
    }
    public get diskReadRate(): number | undefined {
        return this['disk_read_rate'];
    }
    public withDiskWriteRate(diskWriteRate: number): TopIoInfo {
        this['disk_write_rate'] = diskWriteRate;
        return this;
    }
    public set diskWriteRate(diskWriteRate: number  | undefined) {
        this['disk_write_rate'] = diskWriteRate;
    }
    public get diskWriteRate(): number | undefined {
        return this['disk_write_rate'];
    }
    public withSessionId(sessionId: string): TopIoInfo {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withUniqueSqlId(uniqueSqlId: string): TopIoInfo {
        this['unique_sql_id'] = uniqueSqlId;
        return this;
    }
    public set uniqueSqlId(uniqueSqlId: string  | undefined) {
        this['unique_sql_id'] = uniqueSqlId;
    }
    public get uniqueSqlId(): string | undefined {
        return this['unique_sql_id'];
    }
    public withDatabaseName(databaseName: string): TopIoInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withClientIp(clientIp: string): TopIoInfo {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withUserName(userName: string): TopIoInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withState(state: string): TopIoInfo {
        this['state'] = state;
        return this;
    }
    public withSqlStart(sqlStart: number): TopIoInfo {
        this['sql_start'] = sqlStart;
        return this;
    }
    public set sqlStart(sqlStart: number  | undefined) {
        this['sql_start'] = sqlStart;
    }
    public get sqlStart(): number | undefined {
        return this['sql_start'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TopIoInfoThreadTypeEnum {
    WORKER = 'worker',
    BACKGROUND = 'background'
}
