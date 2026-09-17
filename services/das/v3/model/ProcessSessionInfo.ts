

export class ProcessSessionInfo {
    public id?: number;
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    private 'sql_info'?: string;
    private 'state_duration'?: number;
    public state?: string;
    public constructor() { 
    }
    public withId(id: number): ProcessSessionInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): ProcessSessionInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): ProcessSessionInfo {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): ProcessSessionInfo {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): ProcessSessionInfo {
        this['command'] = command;
        return this;
    }
    public withSqlInfo(sqlInfo: string): ProcessSessionInfo {
        this['sql_info'] = sqlInfo;
        return this;
    }
    public set sqlInfo(sqlInfo: string  | undefined) {
        this['sql_info'] = sqlInfo;
    }
    public get sqlInfo(): string | undefined {
        return this['sql_info'];
    }
    public withStateDuration(stateDuration: number): ProcessSessionInfo {
        this['state_duration'] = stateDuration;
        return this;
    }
    public set stateDuration(stateDuration: number  | undefined) {
        this['state_duration'] = stateDuration;
    }
    public get stateDuration(): number | undefined {
        return this['state_duration'];
    }
    public withState(state: string): ProcessSessionInfo {
        this['state'] = state;
        return this;
    }
}