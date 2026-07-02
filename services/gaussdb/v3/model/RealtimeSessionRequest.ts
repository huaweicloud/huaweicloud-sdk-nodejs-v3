

export class RealtimeSessionRequest {
    public filter?: string;
    private 'slow_process_threshold'?: number;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    private 'sql_key'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withFilter(filter: string): RealtimeSessionRequest {
        this['filter'] = filter;
        return this;
    }
    public withSlowProcessThreshold(slowProcessThreshold: number): RealtimeSessionRequest {
        this['slow_process_threshold'] = slowProcessThreshold;
        return this;
    }
    public set slowProcessThreshold(slowProcessThreshold: number  | undefined) {
        this['slow_process_threshold'] = slowProcessThreshold;
    }
    public get slowProcessThreshold(): number | undefined {
        return this['slow_process_threshold'];
    }
    public withUser(user: string): RealtimeSessionRequest {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): RealtimeSessionRequest {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): RealtimeSessionRequest {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): RealtimeSessionRequest {
        this['command'] = command;
        return this;
    }
    public withSqlKey(sqlKey: string): RealtimeSessionRequest {
        this['sql_key'] = sqlKey;
        return this;
    }
    public set sqlKey(sqlKey: string  | undefined) {
        this['sql_key'] = sqlKey;
    }
    public get sqlKey(): string | undefined {
        return this['sql_key'];
    }
    public withSortKey(sortKey: string): RealtimeSessionRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): RealtimeSessionRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}