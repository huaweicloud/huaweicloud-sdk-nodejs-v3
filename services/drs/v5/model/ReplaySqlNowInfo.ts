

export class ReplaySqlNowInfo {
    private 'thread_id'?: number;
    private 'created_at'?: number;
    private 'modified_at'?: number;
    private 'shard_id'?: number;
    private 'schema_name'?: string;
    private 'sql_statement'?: string;
    public latency?: number;
    private 'execute_latency'?: number;
    private 'target_type'?: string;
    private 'target_name'?: string;
    public status?: string;
    public constructor(threadId?: number, createdAt?: number, modifiedAt?: number, shardId?: number, schemaName?: string, sqlStatement?: string, latency?: number, executeLatency?: number, targetType?: string, targetName?: string, status?: string) { 
        this['thread_id'] = threadId;
        this['created_at'] = createdAt;
        this['modified_at'] = modifiedAt;
        this['shard_id'] = shardId;
        this['schema_name'] = schemaName;
        this['sql_statement'] = sqlStatement;
        this['latency'] = latency;
        this['execute_latency'] = executeLatency;
        this['target_type'] = targetType;
        this['target_name'] = targetName;
        this['status'] = status;
    }
    public withThreadId(threadId: number): ReplaySqlNowInfo {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: number  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): number | undefined {
        return this['thread_id'];
    }
    public withCreatedAt(createdAt: number): ReplaySqlNowInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withModifiedAt(modifiedAt: number): ReplaySqlNowInfo {
        this['modified_at'] = modifiedAt;
        return this;
    }
    public set modifiedAt(modifiedAt: number  | undefined) {
        this['modified_at'] = modifiedAt;
    }
    public get modifiedAt(): number | undefined {
        return this['modified_at'];
    }
    public withShardId(shardId: number): ReplaySqlNowInfo {
        this['shard_id'] = shardId;
        return this;
    }
    public set shardId(shardId: number  | undefined) {
        this['shard_id'] = shardId;
    }
    public get shardId(): number | undefined {
        return this['shard_id'];
    }
    public withSchemaName(schemaName: string): ReplaySqlNowInfo {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withSqlStatement(sqlStatement: string): ReplaySqlNowInfo {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withLatency(latency: number): ReplaySqlNowInfo {
        this['latency'] = latency;
        return this;
    }
    public withExecuteLatency(executeLatency: number): ReplaySqlNowInfo {
        this['execute_latency'] = executeLatency;
        return this;
    }
    public set executeLatency(executeLatency: number  | undefined) {
        this['execute_latency'] = executeLatency;
    }
    public get executeLatency(): number | undefined {
        return this['execute_latency'];
    }
    public withTargetType(targetType: string): ReplaySqlNowInfo {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetName(targetName: string): ReplaySqlNowInfo {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withStatus(status: string): ReplaySqlNowInfo {
        this['status'] = status;
        return this;
    }
}