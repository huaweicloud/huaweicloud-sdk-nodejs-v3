

export class SlowLogStatistics {
    private 'execute_count'?: number;
    private 'avg_execute_time'?: number;
    private 'max_execute_time'?: number;
    private 'avg_lock_wait_time'?: number;
    private 'max_lock_wait_time'?: number;
    private 'avg_rows_examined'?: number;
    private 'max_rows_examined'?: number;
    private 'avg_rows_sent'?: number;
    private 'max_rows_sent'?: number;
    private 'avg_key_examined'?: number;
    private 'max_key_examined'?: number;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'sql_type'?: string;
    private 'db_name'?: string;
    public collection?: string;
    public user?: string;
    public client?: string;
    public constructor() { 
    }
    public withExecuteCount(executeCount: number): SlowLogStatistics {
        this['execute_count'] = executeCount;
        return this;
    }
    public set executeCount(executeCount: number  | undefined) {
        this['execute_count'] = executeCount;
    }
    public get executeCount(): number | undefined {
        return this['execute_count'];
    }
    public withAvgExecuteTime(avgExecuteTime: number): SlowLogStatistics {
        this['avg_execute_time'] = avgExecuteTime;
        return this;
    }
    public set avgExecuteTime(avgExecuteTime: number  | undefined) {
        this['avg_execute_time'] = avgExecuteTime;
    }
    public get avgExecuteTime(): number | undefined {
        return this['avg_execute_time'];
    }
    public withMaxExecuteTime(maxExecuteTime: number): SlowLogStatistics {
        this['max_execute_time'] = maxExecuteTime;
        return this;
    }
    public set maxExecuteTime(maxExecuteTime: number  | undefined) {
        this['max_execute_time'] = maxExecuteTime;
    }
    public get maxExecuteTime(): number | undefined {
        return this['max_execute_time'];
    }
    public withAvgLockWaitTime(avgLockWaitTime: number): SlowLogStatistics {
        this['avg_lock_wait_time'] = avgLockWaitTime;
        return this;
    }
    public set avgLockWaitTime(avgLockWaitTime: number  | undefined) {
        this['avg_lock_wait_time'] = avgLockWaitTime;
    }
    public get avgLockWaitTime(): number | undefined {
        return this['avg_lock_wait_time'];
    }
    public withMaxLockWaitTime(maxLockWaitTime: number): SlowLogStatistics {
        this['max_lock_wait_time'] = maxLockWaitTime;
        return this;
    }
    public set maxLockWaitTime(maxLockWaitTime: number  | undefined) {
        this['max_lock_wait_time'] = maxLockWaitTime;
    }
    public get maxLockWaitTime(): number | undefined {
        return this['max_lock_wait_time'];
    }
    public withAvgRowsExamined(avgRowsExamined: number): SlowLogStatistics {
        this['avg_rows_examined'] = avgRowsExamined;
        return this;
    }
    public set avgRowsExamined(avgRowsExamined: number  | undefined) {
        this['avg_rows_examined'] = avgRowsExamined;
    }
    public get avgRowsExamined(): number | undefined {
        return this['avg_rows_examined'];
    }
    public withMaxRowsExamined(maxRowsExamined: number): SlowLogStatistics {
        this['max_rows_examined'] = maxRowsExamined;
        return this;
    }
    public set maxRowsExamined(maxRowsExamined: number  | undefined) {
        this['max_rows_examined'] = maxRowsExamined;
    }
    public get maxRowsExamined(): number | undefined {
        return this['max_rows_examined'];
    }
    public withAvgRowsSent(avgRowsSent: number): SlowLogStatistics {
        this['avg_rows_sent'] = avgRowsSent;
        return this;
    }
    public set avgRowsSent(avgRowsSent: number  | undefined) {
        this['avg_rows_sent'] = avgRowsSent;
    }
    public get avgRowsSent(): number | undefined {
        return this['avg_rows_sent'];
    }
    public withMaxRowsSent(maxRowsSent: number): SlowLogStatistics {
        this['max_rows_sent'] = maxRowsSent;
        return this;
    }
    public set maxRowsSent(maxRowsSent: number  | undefined) {
        this['max_rows_sent'] = maxRowsSent;
    }
    public get maxRowsSent(): number | undefined {
        return this['max_rows_sent'];
    }
    public withAvgKeyExamined(avgKeyExamined: number): SlowLogStatistics {
        this['avg_key_examined'] = avgKeyExamined;
        return this;
    }
    public set avgKeyExamined(avgKeyExamined: number  | undefined) {
        this['avg_key_examined'] = avgKeyExamined;
    }
    public get avgKeyExamined(): number | undefined {
        return this['avg_key_examined'];
    }
    public withMaxKeyExamined(maxKeyExamined: number): SlowLogStatistics {
        this['max_key_examined'] = maxKeyExamined;
        return this;
    }
    public set maxKeyExamined(maxKeyExamined: number  | undefined) {
        this['max_key_examined'] = maxKeyExamined;
    }
    public get maxKeyExamined(): number | undefined {
        return this['max_key_examined'];
    }
    public withNodeId(nodeId: string): SlowLogStatistics {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): SlowLogStatistics {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withSqlType(sqlType: string): SlowLogStatistics {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withDbName(dbName: string): SlowLogStatistics {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withCollection(collection: string): SlowLogStatistics {
        this['collection'] = collection;
        return this;
    }
    public withUser(user: string): SlowLogStatistics {
        this['user'] = user;
        return this;
    }
    public withClient(client: string): SlowLogStatistics {
        this['client'] = client;
        return this;
    }
}