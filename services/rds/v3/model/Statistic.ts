

export class Statistic {
    private 'user_name'?: string;
    public database?: string;
    private 'query_id'?: number;
    public calls?: number;
    public query?: string;
    public rows?: number;
    private 'can_use'?: number;
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
    public withQueryId(queryId: number): Statistic {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: number  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): number | undefined {
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
        this['can_use'] = canUse;
        return this;
    }
    public set canUse(canUse: number  | undefined) {
        this['can_use'] = canUse;
    }
    public get canUse(): number | undefined {
        return this['can_use'];
    }
}