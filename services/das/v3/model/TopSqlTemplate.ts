

export class TopSqlTemplate {
    private 'sql_template'?: string;
    private 'sql_sample_string'?: string;
    private 'sql_type'?: string;
    private 'db_name'?: string;
    private 'execute_num'?: number;
    private 'total_cost'?: number;
    private 'avg_cost'?: number;
    private 'avg_rows_sent'?: number;
    private 'avg_rows_affected'?: number;
    private 'avg_lock_time'?: number;
    private 'total_rows_examined'?: number;
    private 'avg_rows_examined'?: number;
    private 'total_cost_ratio'?: string;
    private 'total_examined_ratio'?: string;
    private 'execute_num_ratio'?: string;
    public constructor(sqlTemplate?: string, sqlSampleString?: string, sqlType?: string, dbName?: string, executeNum?: number, totalCost?: number, avgCost?: number, avgRowsSent?: number, avgRowsAffected?: number, avgLockTime?: number, totalRowsExamined?: number, avgRowsExamined?: number, totalCostRatio?: string, totalExaminedRatio?: string, executeNumRatio?: string) { 
        this['sql_template'] = sqlTemplate;
        this['sql_sample_string'] = sqlSampleString;
        this['sql_type'] = sqlType;
        this['db_name'] = dbName;
        this['execute_num'] = executeNum;
        this['total_cost'] = totalCost;
        this['avg_cost'] = avgCost;
        this['avg_rows_sent'] = avgRowsSent;
        this['avg_rows_affected'] = avgRowsAffected;
        this['avg_lock_time'] = avgLockTime;
        this['total_rows_examined'] = totalRowsExamined;
        this['avg_rows_examined'] = avgRowsExamined;
        this['total_cost_ratio'] = totalCostRatio;
        this['total_examined_ratio'] = totalExaminedRatio;
        this['execute_num_ratio'] = executeNumRatio;
    }
    public withSqlTemplate(sqlTemplate: string): TopSqlTemplate {
        this['sql_template'] = sqlTemplate;
        return this;
    }
    public set sqlTemplate(sqlTemplate: string  | undefined) {
        this['sql_template'] = sqlTemplate;
    }
    public get sqlTemplate(): string | undefined {
        return this['sql_template'];
    }
    public withSqlSampleString(sqlSampleString: string): TopSqlTemplate {
        this['sql_sample_string'] = sqlSampleString;
        return this;
    }
    public set sqlSampleString(sqlSampleString: string  | undefined) {
        this['sql_sample_string'] = sqlSampleString;
    }
    public get sqlSampleString(): string | undefined {
        return this['sql_sample_string'];
    }
    public withSqlType(sqlType: string): TopSqlTemplate {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withDbName(dbName: string): TopSqlTemplate {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withExecuteNum(executeNum: number): TopSqlTemplate {
        this['execute_num'] = executeNum;
        return this;
    }
    public set executeNum(executeNum: number  | undefined) {
        this['execute_num'] = executeNum;
    }
    public get executeNum(): number | undefined {
        return this['execute_num'];
    }
    public withTotalCost(totalCost: number): TopSqlTemplate {
        this['total_cost'] = totalCost;
        return this;
    }
    public set totalCost(totalCost: number  | undefined) {
        this['total_cost'] = totalCost;
    }
    public get totalCost(): number | undefined {
        return this['total_cost'];
    }
    public withAvgCost(avgCost: number): TopSqlTemplate {
        this['avg_cost'] = avgCost;
        return this;
    }
    public set avgCost(avgCost: number  | undefined) {
        this['avg_cost'] = avgCost;
    }
    public get avgCost(): number | undefined {
        return this['avg_cost'];
    }
    public withAvgRowsSent(avgRowsSent: number): TopSqlTemplate {
        this['avg_rows_sent'] = avgRowsSent;
        return this;
    }
    public set avgRowsSent(avgRowsSent: number  | undefined) {
        this['avg_rows_sent'] = avgRowsSent;
    }
    public get avgRowsSent(): number | undefined {
        return this['avg_rows_sent'];
    }
    public withAvgRowsAffected(avgRowsAffected: number): TopSqlTemplate {
        this['avg_rows_affected'] = avgRowsAffected;
        return this;
    }
    public set avgRowsAffected(avgRowsAffected: number  | undefined) {
        this['avg_rows_affected'] = avgRowsAffected;
    }
    public get avgRowsAffected(): number | undefined {
        return this['avg_rows_affected'];
    }
    public withAvgLockTime(avgLockTime: number): TopSqlTemplate {
        this['avg_lock_time'] = avgLockTime;
        return this;
    }
    public set avgLockTime(avgLockTime: number  | undefined) {
        this['avg_lock_time'] = avgLockTime;
    }
    public get avgLockTime(): number | undefined {
        return this['avg_lock_time'];
    }
    public withTotalRowsExamined(totalRowsExamined: number): TopSqlTemplate {
        this['total_rows_examined'] = totalRowsExamined;
        return this;
    }
    public set totalRowsExamined(totalRowsExamined: number  | undefined) {
        this['total_rows_examined'] = totalRowsExamined;
    }
    public get totalRowsExamined(): number | undefined {
        return this['total_rows_examined'];
    }
    public withAvgRowsExamined(avgRowsExamined: number): TopSqlTemplate {
        this['avg_rows_examined'] = avgRowsExamined;
        return this;
    }
    public set avgRowsExamined(avgRowsExamined: number  | undefined) {
        this['avg_rows_examined'] = avgRowsExamined;
    }
    public get avgRowsExamined(): number | undefined {
        return this['avg_rows_examined'];
    }
    public withTotalCostRatio(totalCostRatio: string): TopSqlTemplate {
        this['total_cost_ratio'] = totalCostRatio;
        return this;
    }
    public set totalCostRatio(totalCostRatio: string  | undefined) {
        this['total_cost_ratio'] = totalCostRatio;
    }
    public get totalCostRatio(): string | undefined {
        return this['total_cost_ratio'];
    }
    public withTotalExaminedRatio(totalExaminedRatio: string): TopSqlTemplate {
        this['total_examined_ratio'] = totalExaminedRatio;
        return this;
    }
    public set totalExaminedRatio(totalExaminedRatio: string  | undefined) {
        this['total_examined_ratio'] = totalExaminedRatio;
    }
    public get totalExaminedRatio(): string | undefined {
        return this['total_examined_ratio'];
    }
    public withExecuteNumRatio(executeNumRatio: string): TopSqlTemplate {
        this['execute_num_ratio'] = executeNumRatio;
        return this;
    }
    public set executeNumRatio(executeNumRatio: string  | undefined) {
        this['execute_num_ratio'] = executeNumRatio;
    }
    public get executeNumRatio(): string | undefined {
        return this['execute_num_ratio'];
    }
}