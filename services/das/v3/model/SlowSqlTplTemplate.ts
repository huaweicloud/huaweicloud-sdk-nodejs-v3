

export class SlowSqlTplTemplate {
    private 'sql_template'?: string;
    private 'sql_template_id'?: string;
    private 'sql_sample'?: string;
    private 'db_names'?: Array<string>;
    private 'execute_count'?: number;
    private 'avg_execute_time'?: number;
    private 'max_execute_time'?: number;
    private 'avg_lock_wait_time'?: number;
    private 'max_lock_wait_time'?: number;
    private 'avg_rows_examined'?: number;
    private 'max_rows_examined'?: number;
    private 'avg_rows_sent'?: number;
    private 'max_rows_sent'?: number;
    public constructor() { 
    }
    public withSqlTemplate(sqlTemplate: string): SlowSqlTplTemplate {
        this['sql_template'] = sqlTemplate;
        return this;
    }
    public set sqlTemplate(sqlTemplate: string  | undefined) {
        this['sql_template'] = sqlTemplate;
    }
    public get sqlTemplate(): string | undefined {
        return this['sql_template'];
    }
    public withSqlTemplateId(sqlTemplateId: string): SlowSqlTplTemplate {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withSqlSample(sqlSample: string): SlowSqlTplTemplate {
        this['sql_sample'] = sqlSample;
        return this;
    }
    public set sqlSample(sqlSample: string  | undefined) {
        this['sql_sample'] = sqlSample;
    }
    public get sqlSample(): string | undefined {
        return this['sql_sample'];
    }
    public withDbNames(dbNames: Array<string>): SlowSqlTplTemplate {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: Array<string>  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): Array<string> | undefined {
        return this['db_names'];
    }
    public withExecuteCount(executeCount: number): SlowSqlTplTemplate {
        this['execute_count'] = executeCount;
        return this;
    }
    public set executeCount(executeCount: number  | undefined) {
        this['execute_count'] = executeCount;
    }
    public get executeCount(): number | undefined {
        return this['execute_count'];
    }
    public withAvgExecuteTime(avgExecuteTime: number): SlowSqlTplTemplate {
        this['avg_execute_time'] = avgExecuteTime;
        return this;
    }
    public set avgExecuteTime(avgExecuteTime: number  | undefined) {
        this['avg_execute_time'] = avgExecuteTime;
    }
    public get avgExecuteTime(): number | undefined {
        return this['avg_execute_time'];
    }
    public withMaxExecuteTime(maxExecuteTime: number): SlowSqlTplTemplate {
        this['max_execute_time'] = maxExecuteTime;
        return this;
    }
    public set maxExecuteTime(maxExecuteTime: number  | undefined) {
        this['max_execute_time'] = maxExecuteTime;
    }
    public get maxExecuteTime(): number | undefined {
        return this['max_execute_time'];
    }
    public withAvgLockWaitTime(avgLockWaitTime: number): SlowSqlTplTemplate {
        this['avg_lock_wait_time'] = avgLockWaitTime;
        return this;
    }
    public set avgLockWaitTime(avgLockWaitTime: number  | undefined) {
        this['avg_lock_wait_time'] = avgLockWaitTime;
    }
    public get avgLockWaitTime(): number | undefined {
        return this['avg_lock_wait_time'];
    }
    public withMaxLockWaitTime(maxLockWaitTime: number): SlowSqlTplTemplate {
        this['max_lock_wait_time'] = maxLockWaitTime;
        return this;
    }
    public set maxLockWaitTime(maxLockWaitTime: number  | undefined) {
        this['max_lock_wait_time'] = maxLockWaitTime;
    }
    public get maxLockWaitTime(): number | undefined {
        return this['max_lock_wait_time'];
    }
    public withAvgRowsExamined(avgRowsExamined: number): SlowSqlTplTemplate {
        this['avg_rows_examined'] = avgRowsExamined;
        return this;
    }
    public set avgRowsExamined(avgRowsExamined: number  | undefined) {
        this['avg_rows_examined'] = avgRowsExamined;
    }
    public get avgRowsExamined(): number | undefined {
        return this['avg_rows_examined'];
    }
    public withMaxRowsExamined(maxRowsExamined: number): SlowSqlTplTemplate {
        this['max_rows_examined'] = maxRowsExamined;
        return this;
    }
    public set maxRowsExamined(maxRowsExamined: number  | undefined) {
        this['max_rows_examined'] = maxRowsExamined;
    }
    public get maxRowsExamined(): number | undefined {
        return this['max_rows_examined'];
    }
    public withAvgRowsSent(avgRowsSent: number): SlowSqlTplTemplate {
        this['avg_rows_sent'] = avgRowsSent;
        return this;
    }
    public set avgRowsSent(avgRowsSent: number  | undefined) {
        this['avg_rows_sent'] = avgRowsSent;
    }
    public get avgRowsSent(): number | undefined {
        return this['avg_rows_sent'];
    }
    public withMaxRowsSent(maxRowsSent: number): SlowSqlTplTemplate {
        this['max_rows_sent'] = maxRowsSent;
        return this;
    }
    public set maxRowsSent(maxRowsSent: number  | undefined) {
        this['max_rows_sent'] = maxRowsSent;
    }
    public get maxRowsSent(): number | undefined {
        return this['max_rows_sent'];
    }
}