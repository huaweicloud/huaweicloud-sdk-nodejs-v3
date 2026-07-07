import { ShowAnalysisSessionResultRespTopStateDuration } from './ShowAnalysisSessionResultRespTopStateDuration';


export class ShowAnalysisSessionResultRespSqlTemplates {
    private 'sql_template'?: string;
    private 'database_name'?: string;
    private 'total_count'?: number;
    private 'top_state_duration_list'?: Array<ShowAnalysisSessionResultRespTopStateDuration>;
    private 'top_transaction_duration_list'?: Array<ShowAnalysisSessionResultRespTopStateDuration>;
    public constructor(sqlTemplate?: string, databaseName?: string, totalCount?: number, topStateDurationList?: Array<ShowAnalysisSessionResultRespTopStateDuration>, topTransactionDurationList?: Array<ShowAnalysisSessionResultRespTopStateDuration>) { 
        this['sql_template'] = sqlTemplate;
        this['database_name'] = databaseName;
        this['total_count'] = totalCount;
        this['top_state_duration_list'] = topStateDurationList;
        this['top_transaction_duration_list'] = topTransactionDurationList;
    }
    public withSqlTemplate(sqlTemplate: string): ShowAnalysisSessionResultRespSqlTemplates {
        this['sql_template'] = sqlTemplate;
        return this;
    }
    public set sqlTemplate(sqlTemplate: string  | undefined) {
        this['sql_template'] = sqlTemplate;
    }
    public get sqlTemplate(): string | undefined {
        return this['sql_template'];
    }
    public withDatabaseName(databaseName: string): ShowAnalysisSessionResultRespSqlTemplates {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTotalCount(totalCount: number): ShowAnalysisSessionResultRespSqlTemplates {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTopStateDurationList(topStateDurationList: Array<ShowAnalysisSessionResultRespTopStateDuration>): ShowAnalysisSessionResultRespSqlTemplates {
        this['top_state_duration_list'] = topStateDurationList;
        return this;
    }
    public set topStateDurationList(topStateDurationList: Array<ShowAnalysisSessionResultRespTopStateDuration>  | undefined) {
        this['top_state_duration_list'] = topStateDurationList;
    }
    public get topStateDurationList(): Array<ShowAnalysisSessionResultRespTopStateDuration> | undefined {
        return this['top_state_duration_list'];
    }
    public withTopTransactionDurationList(topTransactionDurationList: Array<ShowAnalysisSessionResultRespTopStateDuration>): ShowAnalysisSessionResultRespSqlTemplates {
        this['top_transaction_duration_list'] = topTransactionDurationList;
        return this;
    }
    public set topTransactionDurationList(topTransactionDurationList: Array<ShowAnalysisSessionResultRespTopStateDuration>  | undefined) {
        this['top_transaction_duration_list'] = topTransactionDurationList;
    }
    public get topTransactionDurationList(): Array<ShowAnalysisSessionResultRespTopStateDuration> | undefined {
        return this['top_transaction_duration_list'];
    }
}