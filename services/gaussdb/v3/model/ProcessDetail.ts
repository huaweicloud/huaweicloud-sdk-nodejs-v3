

export class ProcessDetail {
    public id?: number;
    public user?: string;
    public db?: string;
    public state?: string;
    public command?: string;
    private 'sql_info'?: string;
    private 'state_duration'?: number;
    public constructor() { 
    }
    public withId(id: number): ProcessDetail {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): ProcessDetail {
        this['user'] = user;
        return this;
    }
    public withDb(db: string): ProcessDetail {
        this['db'] = db;
        return this;
    }
    public withState(state: string): ProcessDetail {
        this['state'] = state;
        return this;
    }
    public withCommand(command: string): ProcessDetail {
        this['command'] = command;
        return this;
    }
    public withSqlInfo(sqlInfo: string): ProcessDetail {
        this['sql_info'] = sqlInfo;
        return this;
    }
    public set sqlInfo(sqlInfo: string  | undefined) {
        this['sql_info'] = sqlInfo;
    }
    public get sqlInfo(): string | undefined {
        return this['sql_info'];
    }
    public withStateDuration(stateDuration: number): ProcessDetail {
        this['state_duration'] = stateDuration;
        return this;
    }
    public set stateDuration(stateDuration: number  | undefined) {
        this['state_duration'] = stateDuration;
    }
    public get stateDuration(): number | undefined {
        return this['state_duration'];
    }
}