

export class QueryLtsStructLogParams {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'sql_expression'?: string;
    private 'original_content'?: boolean;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): QueryLtsStructLogParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryLtsStructLogParams {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSqlExpression(sqlExpression: string): QueryLtsStructLogParams {
        this['sql_expression'] = sqlExpression;
        return this;
    }
    public set sqlExpression(sqlExpression: string  | undefined) {
        this['sql_expression'] = sqlExpression;
    }
    public get sqlExpression(): string | undefined {
        return this['sql_expression'];
    }
    public withOriginalContent(originalContent: boolean): QueryLtsStructLogParams {
        this['original_content'] = originalContent;
        return this;
    }
    public set originalContent(originalContent: boolean  | undefined) {
        this['original_content'] = originalContent;
    }
    public get originalContent(): boolean | undefined {
        return this['original_content'];
    }
}