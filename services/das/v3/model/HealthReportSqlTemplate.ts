

export class HealthReportSqlTemplate {
    private 'template_id'?: string;
    public template?: string;
    public databases?: Array<string>;
    public times?: number;
    private 'avg_query_time'?: number;
    private 'max_query_time'?: number;
    private 'avg_rows_examined'?: number;
    private 'max_rows_examined'?: number;
    private 'sum_rows_examined'?: number;
    private 'avg_rows_sent'?: number;
    private 'max_rows_sent'?: number;
    public constructor(templateId?: string, template?: string, databases?: Array<string>, times?: number, avgQueryTime?: number, maxQueryTime?: number, avgRowsExamined?: number, maxRowsExamined?: number, sumRowsExamined?: number, avgRowsSent?: number, maxRowsSent?: number) { 
        this['template_id'] = templateId;
        this['template'] = template;
        this['databases'] = databases;
        this['times'] = times;
        this['avg_query_time'] = avgQueryTime;
        this['max_query_time'] = maxQueryTime;
        this['avg_rows_examined'] = avgRowsExamined;
        this['max_rows_examined'] = maxRowsExamined;
        this['sum_rows_examined'] = sumRowsExamined;
        this['avg_rows_sent'] = avgRowsSent;
        this['max_rows_sent'] = maxRowsSent;
    }
    public withTemplateId(templateId: string): HealthReportSqlTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplate(template: string): HealthReportSqlTemplate {
        this['template'] = template;
        return this;
    }
    public withDatabases(databases: Array<string>): HealthReportSqlTemplate {
        this['databases'] = databases;
        return this;
    }
    public withTimes(times: number): HealthReportSqlTemplate {
        this['times'] = times;
        return this;
    }
    public withAvgQueryTime(avgQueryTime: number): HealthReportSqlTemplate {
        this['avg_query_time'] = avgQueryTime;
        return this;
    }
    public set avgQueryTime(avgQueryTime: number  | undefined) {
        this['avg_query_time'] = avgQueryTime;
    }
    public get avgQueryTime(): number | undefined {
        return this['avg_query_time'];
    }
    public withMaxQueryTime(maxQueryTime: number): HealthReportSqlTemplate {
        this['max_query_time'] = maxQueryTime;
        return this;
    }
    public set maxQueryTime(maxQueryTime: number  | undefined) {
        this['max_query_time'] = maxQueryTime;
    }
    public get maxQueryTime(): number | undefined {
        return this['max_query_time'];
    }
    public withAvgRowsExamined(avgRowsExamined: number): HealthReportSqlTemplate {
        this['avg_rows_examined'] = avgRowsExamined;
        return this;
    }
    public set avgRowsExamined(avgRowsExamined: number  | undefined) {
        this['avg_rows_examined'] = avgRowsExamined;
    }
    public get avgRowsExamined(): number | undefined {
        return this['avg_rows_examined'];
    }
    public withMaxRowsExamined(maxRowsExamined: number): HealthReportSqlTemplate {
        this['max_rows_examined'] = maxRowsExamined;
        return this;
    }
    public set maxRowsExamined(maxRowsExamined: number  | undefined) {
        this['max_rows_examined'] = maxRowsExamined;
    }
    public get maxRowsExamined(): number | undefined {
        return this['max_rows_examined'];
    }
    public withSumRowsExamined(sumRowsExamined: number): HealthReportSqlTemplate {
        this['sum_rows_examined'] = sumRowsExamined;
        return this;
    }
    public set sumRowsExamined(sumRowsExamined: number  | undefined) {
        this['sum_rows_examined'] = sumRowsExamined;
    }
    public get sumRowsExamined(): number | undefined {
        return this['sum_rows_examined'];
    }
    public withAvgRowsSent(avgRowsSent: number): HealthReportSqlTemplate {
        this['avg_rows_sent'] = avgRowsSent;
        return this;
    }
    public set avgRowsSent(avgRowsSent: number  | undefined) {
        this['avg_rows_sent'] = avgRowsSent;
    }
    public get avgRowsSent(): number | undefined {
        return this['avg_rows_sent'];
    }
    public withMaxRowsSent(maxRowsSent: number): HealthReportSqlTemplate {
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