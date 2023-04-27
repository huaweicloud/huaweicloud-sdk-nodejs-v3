

export class QueryLtsStructLogParams {
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    private 'sql_expression'?: string | undefined;
    private 'original_content'?: boolean | undefined;
    public constructor(startTime?: any, endTime?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): QueryLtsStructLogParams {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryLtsStructLogParams {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withSqlExpression(sqlExpression: string): QueryLtsStructLogParams {
        this['sql_expression'] = sqlExpression;
        return this;
    }
    public set sqlExpression(sqlExpression: string | undefined) {
        this['sql_expression'] = sqlExpression;
    }
    public get sqlExpression() {
        return this['sql_expression'];
    }
    public withOriginalContent(originalContent: boolean): QueryLtsStructLogParams {
        this['original_content'] = originalContent;
        return this;
    }
    public set originalContent(originalContent: boolean | undefined) {
        this['original_content'] = originalContent;
    }
    public get originalContent() {
        return this['original_content'];
    }
}