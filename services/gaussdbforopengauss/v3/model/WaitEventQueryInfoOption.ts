

export class WaitEventQueryInfoOption {
    private 'database_name'?: string;
    private 'user_name'?: string;
    public waiting?: string;
    private 'session_id'?: string;
    private 'block_session_id'?: string;
    private 'block_count'?: number;
    private 'unique_sql_id'?: string;
    private 'query_id'?: string;
    public state?: string;
    private 'wait_event'?: string;
    private 'wait_status'?: string;
    public constructor() { 
    }
    public withDatabaseName(databaseName: string): WaitEventQueryInfoOption {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withUserName(userName: string): WaitEventQueryInfoOption {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withWaiting(waiting: string): WaitEventQueryInfoOption {
        this['waiting'] = waiting;
        return this;
    }
    public withSessionId(sessionId: string): WaitEventQueryInfoOption {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withBlockSessionId(blockSessionId: string): WaitEventQueryInfoOption {
        this['block_session_id'] = blockSessionId;
        return this;
    }
    public set blockSessionId(blockSessionId: string  | undefined) {
        this['block_session_id'] = blockSessionId;
    }
    public get blockSessionId(): string | undefined {
        return this['block_session_id'];
    }
    public withBlockCount(blockCount: number): WaitEventQueryInfoOption {
        this['block_count'] = blockCount;
        return this;
    }
    public set blockCount(blockCount: number  | undefined) {
        this['block_count'] = blockCount;
    }
    public get blockCount(): number | undefined {
        return this['block_count'];
    }
    public withUniqueSqlId(uniqueSqlId: string): WaitEventQueryInfoOption {
        this['unique_sql_id'] = uniqueSqlId;
        return this;
    }
    public set uniqueSqlId(uniqueSqlId: string  | undefined) {
        this['unique_sql_id'] = uniqueSqlId;
    }
    public get uniqueSqlId(): string | undefined {
        return this['unique_sql_id'];
    }
    public withQueryId(queryId: string): WaitEventQueryInfoOption {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withState(state: string): WaitEventQueryInfoOption {
        this['state'] = state;
        return this;
    }
    public withWaitEvent(waitEvent: string): WaitEventQueryInfoOption {
        this['wait_event'] = waitEvent;
        return this;
    }
    public set waitEvent(waitEvent: string  | undefined) {
        this['wait_event'] = waitEvent;
    }
    public get waitEvent(): string | undefined {
        return this['wait_event'];
    }
    public withWaitStatus(waitStatus: string): WaitEventQueryInfoOption {
        this['wait_status'] = waitStatus;
        return this;
    }
    public set waitStatus(waitStatus: string  | undefined) {
        this['wait_status'] = waitStatus;
    }
    public get waitStatus(): string | undefined {
        return this['wait_status'];
    }
}