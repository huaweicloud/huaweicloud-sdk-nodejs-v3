

export class ESDBSlowSqlTemplateItem {
    private 'query_sample'?: string;
    public database?: string;
    private 'execute_times'?: number;
    private 'avg_rows_examined'?: number;
    private 'max_time'?: number;
    private 'avg_time'?: number;
    private 'max_rows_examined'?: number;
    private 'rows_examined_sum'?: number;
    private 'cost_time_sum'?: number;
    public constructor() { 
    }
    public withQuerySample(querySample: string): ESDBSlowSqlTemplateItem {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withDatabase(database: string): ESDBSlowSqlTemplateItem {
        this['database'] = database;
        return this;
    }
    public withExecuteTimes(executeTimes: number): ESDBSlowSqlTemplateItem {
        this['execute_times'] = executeTimes;
        return this;
    }
    public set executeTimes(executeTimes: number  | undefined) {
        this['execute_times'] = executeTimes;
    }
    public get executeTimes(): number | undefined {
        return this['execute_times'];
    }
    public withAvgRowsExamined(avgRowsExamined: number): ESDBSlowSqlTemplateItem {
        this['avg_rows_examined'] = avgRowsExamined;
        return this;
    }
    public set avgRowsExamined(avgRowsExamined: number  | undefined) {
        this['avg_rows_examined'] = avgRowsExamined;
    }
    public get avgRowsExamined(): number | undefined {
        return this['avg_rows_examined'];
    }
    public withMaxTime(maxTime: number): ESDBSlowSqlTemplateItem {
        this['max_time'] = maxTime;
        return this;
    }
    public set maxTime(maxTime: number  | undefined) {
        this['max_time'] = maxTime;
    }
    public get maxTime(): number | undefined {
        return this['max_time'];
    }
    public withAvgTime(avgTime: number): ESDBSlowSqlTemplateItem {
        this['avg_time'] = avgTime;
        return this;
    }
    public set avgTime(avgTime: number  | undefined) {
        this['avg_time'] = avgTime;
    }
    public get avgTime(): number | undefined {
        return this['avg_time'];
    }
    public withMaxRowsExamined(maxRowsExamined: number): ESDBSlowSqlTemplateItem {
        this['max_rows_examined'] = maxRowsExamined;
        return this;
    }
    public set maxRowsExamined(maxRowsExamined: number  | undefined) {
        this['max_rows_examined'] = maxRowsExamined;
    }
    public get maxRowsExamined(): number | undefined {
        return this['max_rows_examined'];
    }
    public withRowsExaminedSum(rowsExaminedSum: number): ESDBSlowSqlTemplateItem {
        this['rows_examined_sum'] = rowsExaminedSum;
        return this;
    }
    public set rowsExaminedSum(rowsExaminedSum: number  | undefined) {
        this['rows_examined_sum'] = rowsExaminedSum;
    }
    public get rowsExaminedSum(): number | undefined {
        return this['rows_examined_sum'];
    }
    public withCostTimeSum(costTimeSum: number): ESDBSlowSqlTemplateItem {
        this['cost_time_sum'] = costTimeSum;
        return this;
    }
    public set costTimeSum(costTimeSum: number  | undefined) {
        this['cost_time_sum'] = costTimeSum;
    }
    public get costTimeSum(): number | undefined {
        return this['cost_time_sum'];
    }
}