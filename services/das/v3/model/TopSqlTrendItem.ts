

export class TopSqlTrendItem {
    private 'execute_at'?: number;
    private 'query_time_in_100ms'?: number;
    private 'query_time_in_500ms'?: number;
    private 'query_time_in_1s'?: number;
    private 'query_time_over_1s'?: number;
    public constructor(executeAt?: number, queryTimeIn100ms?: number, queryTimeIn500ms?: number, queryTimeIn1s?: number, queryTimeOver1s?: number) { 
        this['execute_at'] = executeAt;
        this['query_time_in_100ms'] = queryTimeIn100ms;
        this['query_time_in_500ms'] = queryTimeIn500ms;
        this['query_time_in_1s'] = queryTimeIn1s;
        this['query_time_over_1s'] = queryTimeOver1s;
    }
    public withExecuteAt(executeAt: number): TopSqlTrendItem {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withQueryTimeIn100ms(queryTimeIn100ms: number): TopSqlTrendItem {
        this['query_time_in_100ms'] = queryTimeIn100ms;
        return this;
    }
    public set queryTimeIn100ms(queryTimeIn100ms: number  | undefined) {
        this['query_time_in_100ms'] = queryTimeIn100ms;
    }
    public get queryTimeIn100ms(): number | undefined {
        return this['query_time_in_100ms'];
    }
    public withQueryTimeIn500ms(queryTimeIn500ms: number): TopSqlTrendItem {
        this['query_time_in_500ms'] = queryTimeIn500ms;
        return this;
    }
    public set queryTimeIn500ms(queryTimeIn500ms: number  | undefined) {
        this['query_time_in_500ms'] = queryTimeIn500ms;
    }
    public get queryTimeIn500ms(): number | undefined {
        return this['query_time_in_500ms'];
    }
    public withQueryTimeIn1s(queryTimeIn1s: number): TopSqlTrendItem {
        this['query_time_in_1s'] = queryTimeIn1s;
        return this;
    }
    public set queryTimeIn1s(queryTimeIn1s: number  | undefined) {
        this['query_time_in_1s'] = queryTimeIn1s;
    }
    public get queryTimeIn1s(): number | undefined {
        return this['query_time_in_1s'];
    }
    public withQueryTimeOver1s(queryTimeOver1s: number): TopSqlTrendItem {
        this['query_time_over_1s'] = queryTimeOver1s;
        return this;
    }
    public set queryTimeOver1s(queryTimeOver1s: number  | undefined) {
        this['query_time_over_1s'] = queryTimeOver1s;
    }
    public get queryTimeOver1s(): number | undefined {
        return this['query_time_over_1s'];
    }
}