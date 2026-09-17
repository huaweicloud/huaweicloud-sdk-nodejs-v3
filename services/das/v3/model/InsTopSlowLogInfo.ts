

export class InsTopSlowLogInfo {
    private 'template_id'?: string;
    public template?: string;
    public databases?: Array<string>;
    public time?: number;
    private 'avg_query_time'?: number;
    private 'max_query_time'?: number;
    private 'avg_rows_examined'?: number;
    private 'max_rows_examined'?: number;
    private 'sum_rows_examined'?: number;
    private 'avg_rows_sent'?: number;
    private 'max_rows_sent'?: number;
    public constructor() { 
    }
    public withTemplateId(templateId: string): InsTopSlowLogInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplate(template: string): InsTopSlowLogInfo {
        this['template'] = template;
        return this;
    }
    public withDatabases(databases: Array<string>): InsTopSlowLogInfo {
        this['databases'] = databases;
        return this;
    }
    public withTime(time: number): InsTopSlowLogInfo {
        this['time'] = time;
        return this;
    }
    public withAvgQueryTime(avgQueryTime: number): InsTopSlowLogInfo {
        this['avg_query_time'] = avgQueryTime;
        return this;
    }
    public set avgQueryTime(avgQueryTime: number  | undefined) {
        this['avg_query_time'] = avgQueryTime;
    }
    public get avgQueryTime(): number | undefined {
        return this['avg_query_time'];
    }
    public withMaxQueryTime(maxQueryTime: number): InsTopSlowLogInfo {
        this['max_query_time'] = maxQueryTime;
        return this;
    }
    public set maxQueryTime(maxQueryTime: number  | undefined) {
        this['max_query_time'] = maxQueryTime;
    }
    public get maxQueryTime(): number | undefined {
        return this['max_query_time'];
    }
    public withAvgRowsExamined(avgRowsExamined: number): InsTopSlowLogInfo {
        this['avg_rows_examined'] = avgRowsExamined;
        return this;
    }
    public set avgRowsExamined(avgRowsExamined: number  | undefined) {
        this['avg_rows_examined'] = avgRowsExamined;
    }
    public get avgRowsExamined(): number | undefined {
        return this['avg_rows_examined'];
    }
    public withMaxRowsExamined(maxRowsExamined: number): InsTopSlowLogInfo {
        this['max_rows_examined'] = maxRowsExamined;
        return this;
    }
    public set maxRowsExamined(maxRowsExamined: number  | undefined) {
        this['max_rows_examined'] = maxRowsExamined;
    }
    public get maxRowsExamined(): number | undefined {
        return this['max_rows_examined'];
    }
    public withSumRowsExamined(sumRowsExamined: number): InsTopSlowLogInfo {
        this['sum_rows_examined'] = sumRowsExamined;
        return this;
    }
    public set sumRowsExamined(sumRowsExamined: number  | undefined) {
        this['sum_rows_examined'] = sumRowsExamined;
    }
    public get sumRowsExamined(): number | undefined {
        return this['sum_rows_examined'];
    }
    public withAvgRowsSent(avgRowsSent: number): InsTopSlowLogInfo {
        this['avg_rows_sent'] = avgRowsSent;
        return this;
    }
    public set avgRowsSent(avgRowsSent: number  | undefined) {
        this['avg_rows_sent'] = avgRowsSent;
    }
    public get avgRowsSent(): number | undefined {
        return this['avg_rows_sent'];
    }
    public withMaxRowsSent(maxRowsSent: number): InsTopSlowLogInfo {
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