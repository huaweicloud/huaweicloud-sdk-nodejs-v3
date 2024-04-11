

export class ReplayingSqlResp {
    private 'schema_name'?: string;
    private 'sql_statement'?: string;
    public latency?: number;
    private 'execute_latency'?: number;
    public status?: string;
    public client?: string;
    private 'connection_id'?: string;
    private 'replay_start_time'?: string;
    public constructor() { 
    }
    public withSchemaName(schemaName: string): ReplayingSqlResp {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withSqlStatement(sqlStatement: string): ReplayingSqlResp {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withLatency(latency: number): ReplayingSqlResp {
        this['latency'] = latency;
        return this;
    }
    public withExecuteLatency(executeLatency: number): ReplayingSqlResp {
        this['execute_latency'] = executeLatency;
        return this;
    }
    public set executeLatency(executeLatency: number  | undefined) {
        this['execute_latency'] = executeLatency;
    }
    public get executeLatency(): number | undefined {
        return this['execute_latency'];
    }
    public withStatus(status: string): ReplayingSqlResp {
        this['status'] = status;
        return this;
    }
    public withClient(client: string): ReplayingSqlResp {
        this['client'] = client;
        return this;
    }
    public withConnectionId(connectionId: string): ReplayingSqlResp {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withReplayStartTime(replayStartTime: string): ReplayingSqlResp {
        this['replay_start_time'] = replayStartTime;
        return this;
    }
    public set replayStartTime(replayStartTime: string  | undefined) {
        this['replay_start_time'] = replayStartTime;
    }
    public get replayStartTime(): string | undefined {
        return this['replay_start_time'];
    }
}