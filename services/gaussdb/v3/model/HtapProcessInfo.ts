

export class HtapProcessInfo {
    public id?: string;
    public user?: string;
    public host?: string;
    public state?: string;
    public database?: string;
    private 'sql_statement'?: string;
    public duration?: string;
    public command?: string;
    public constructor() { 
    }
    public withId(id: string): HtapProcessInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): HtapProcessInfo {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): HtapProcessInfo {
        this['host'] = host;
        return this;
    }
    public withState(state: string): HtapProcessInfo {
        this['state'] = state;
        return this;
    }
    public withDatabase(database: string): HtapProcessInfo {
        this['database'] = database;
        return this;
    }
    public withSqlStatement(sqlStatement: string): HtapProcessInfo {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withDuration(duration: string): HtapProcessInfo {
        this['duration'] = duration;
        return this;
    }
    public withCommand(command: string): HtapProcessInfo {
        this['command'] = command;
        return this;
    }
}