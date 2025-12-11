

export class Statistic {
    private 'user_name'?: string;
    public database?: string;
    private 'query_id'?: string;
    public calls?: number;
    public query?: string;
    public rows?: number;
    public canUse?: number;
    public constructor() { 
    }
    public withUserName(userName: string): Statistic {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatabase(database: string): Statistic {
        this['database'] = database;
        return this;
    }
    public withQueryId(queryId: string): Statistic {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withCalls(calls: number): Statistic {
        this['calls'] = calls;
        return this;
    }
    public withQuery(query: string): Statistic {
        this['query'] = query;
        return this;
    }
    public withRows(rows: number): Statistic {
        this['rows'] = rows;
        return this;
    }
    public withCanUse(canUse: number): Statistic {
        this['canUse'] = canUse;
        return this;
    }
}