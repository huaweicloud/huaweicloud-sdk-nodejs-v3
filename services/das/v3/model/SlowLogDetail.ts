

export class SlowLogDetail {
    private 'occurrence_time'?: number;
    private 'sql_template_id'?: string;
    private 'original_sql'?: string;
    private 'db_name'?: string;
    public client?: string;
    public user?: string;
    private 'execute_time'?: number;
    private 'lock_wait_time'?: number;
    private 'rows_examined'?: number;
    private 'rows_sent'?: number;
    public tunable?: boolean;
    private 'end_time'?: number;
    private 'app_name'?: string;
    private 'rows_affected'?: number;
    private 'cpu_time'?: number;
    private 'logical_reads'?: number;
    private 'physical_reads'?: number;
    public writes?: number;
    private 'sql_type'?: string;
    public collection?: string;
    private 'key_examined'?: number;
    private 'node_id'?: string;
    private 'node_name'?: string;
    public killed?: string;
    public constructor() { 
    }
    public withOccurrenceTime(occurrenceTime: number): SlowLogDetail {
        this['occurrence_time'] = occurrenceTime;
        return this;
    }
    public set occurrenceTime(occurrenceTime: number  | undefined) {
        this['occurrence_time'] = occurrenceTime;
    }
    public get occurrenceTime(): number | undefined {
        return this['occurrence_time'];
    }
    public withSqlTemplateId(sqlTemplateId: string): SlowLogDetail {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withOriginalSql(originalSql: string): SlowLogDetail {
        this['original_sql'] = originalSql;
        return this;
    }
    public set originalSql(originalSql: string  | undefined) {
        this['original_sql'] = originalSql;
    }
    public get originalSql(): string | undefined {
        return this['original_sql'];
    }
    public withDbName(dbName: string): SlowLogDetail {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withClient(client: string): SlowLogDetail {
        this['client'] = client;
        return this;
    }
    public withUser(user: string): SlowLogDetail {
        this['user'] = user;
        return this;
    }
    public withExecuteTime(executeTime: number): SlowLogDetail {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: number  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): number | undefined {
        return this['execute_time'];
    }
    public withLockWaitTime(lockWaitTime: number): SlowLogDetail {
        this['lock_wait_time'] = lockWaitTime;
        return this;
    }
    public set lockWaitTime(lockWaitTime: number  | undefined) {
        this['lock_wait_time'] = lockWaitTime;
    }
    public get lockWaitTime(): number | undefined {
        return this['lock_wait_time'];
    }
    public withRowsExamined(rowsExamined: number): SlowLogDetail {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withRowsSent(rowsSent: number): SlowLogDetail {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
    public withTunable(tunable: boolean): SlowLogDetail {
        this['tunable'] = tunable;
        return this;
    }
    public withEndTime(endTime: number): SlowLogDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withAppName(appName: string): SlowLogDetail {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withRowsAffected(rowsAffected: number): SlowLogDetail {
        this['rows_affected'] = rowsAffected;
        return this;
    }
    public set rowsAffected(rowsAffected: number  | undefined) {
        this['rows_affected'] = rowsAffected;
    }
    public get rowsAffected(): number | undefined {
        return this['rows_affected'];
    }
    public withCpuTime(cpuTime: number): SlowLogDetail {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withLogicalReads(logicalReads: number): SlowLogDetail {
        this['logical_reads'] = logicalReads;
        return this;
    }
    public set logicalReads(logicalReads: number  | undefined) {
        this['logical_reads'] = logicalReads;
    }
    public get logicalReads(): number | undefined {
        return this['logical_reads'];
    }
    public withPhysicalReads(physicalReads: number): SlowLogDetail {
        this['physical_reads'] = physicalReads;
        return this;
    }
    public set physicalReads(physicalReads: number  | undefined) {
        this['physical_reads'] = physicalReads;
    }
    public get physicalReads(): number | undefined {
        return this['physical_reads'];
    }
    public withWrites(writes: number): SlowLogDetail {
        this['writes'] = writes;
        return this;
    }
    public withSqlType(sqlType: string): SlowLogDetail {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withCollection(collection: string): SlowLogDetail {
        this['collection'] = collection;
        return this;
    }
    public withKeyExamined(keyExamined: number): SlowLogDetail {
        this['key_examined'] = keyExamined;
        return this;
    }
    public set keyExamined(keyExamined: number  | undefined) {
        this['key_examined'] = keyExamined;
    }
    public get keyExamined(): number | undefined {
        return this['key_examined'];
    }
    public withNodeId(nodeId: string): SlowLogDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): SlowLogDetail {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withKilled(killed: string): SlowLogDetail {
        this['killed'] = killed;
        return this;
    }
}