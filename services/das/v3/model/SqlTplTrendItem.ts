

export class SqlTplTrendItem {
    private 'execute_at'?: number;
    private 'query_time_in500ms'?: number;
    private 'query_time_in100ms'?: number;
    private 'query_time_in1s'?: number;
    private 'query_time_over1s'?: number;
    private 'query_executions'?: number;
    public constructor() { 
    }
    public withExecuteAt(executeAt: number): SqlTplTrendItem {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withQueryTimeIn500ms(queryTimeIn500ms: number): SqlTplTrendItem {
        this['query_time_in500ms'] = queryTimeIn500ms;
        return this;
    }
    public set queryTimeIn500ms(queryTimeIn500ms: number  | undefined) {
        this['query_time_in500ms'] = queryTimeIn500ms;
    }
    public get queryTimeIn500ms(): number | undefined {
        return this['query_time_in500ms'];
    }
    public withQueryTimeIn100ms(queryTimeIn100ms: number): SqlTplTrendItem {
        this['query_time_in100ms'] = queryTimeIn100ms;
        return this;
    }
    public set queryTimeIn100ms(queryTimeIn100ms: number  | undefined) {
        this['query_time_in100ms'] = queryTimeIn100ms;
    }
    public get queryTimeIn100ms(): number | undefined {
        return this['query_time_in100ms'];
    }
    public withQueryTimeIn1s(queryTimeIn1s: number): SqlTplTrendItem {
        this['query_time_in1s'] = queryTimeIn1s;
        return this;
    }
    public set queryTimeIn1s(queryTimeIn1s: number  | undefined) {
        this['query_time_in1s'] = queryTimeIn1s;
    }
    public get queryTimeIn1s(): number | undefined {
        return this['query_time_in1s'];
    }
    public withQueryTimeOver1s(queryTimeOver1s: number): SqlTplTrendItem {
        this['query_time_over1s'] = queryTimeOver1s;
        return this;
    }
    public set queryTimeOver1s(queryTimeOver1s: number  | undefined) {
        this['query_time_over1s'] = queryTimeOver1s;
    }
    public get queryTimeOver1s(): number | undefined {
        return this['query_time_over1s'];
    }
    public withQueryExecutions(queryExecutions: number): SqlTplTrendItem {
        this['query_executions'] = queryExecutions;
        return this;
    }
    public set queryExecutions(queryExecutions: number  | undefined) {
        this['query_executions'] = queryExecutions;
    }
    public get queryExecutions(): number | undefined {
        return this['query_executions'];
    }
}