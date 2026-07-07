import { ShowAnalysisSessionResultRespSqlTemplates } from './ShowAnalysisSessionResultRespSqlTemplates';
import { ShowAnalysisSessionResultRespTopStateDuration } from './ShowAnalysisSessionResultRespTopStateDuration';
import { ShowAnalysisSessionResultRespTopTransactionDuration } from './ShowAnalysisSessionResultRespTopTransactionDuration';


export class ShowAnalysisSessionResultResp {
    private 'total_count'?: number;
    private 'top_state_duration'?: Array<ShowAnalysisSessionResultRespTopStateDuration>;
    private 'top_transaction_duration'?: Array<ShowAnalysisSessionResultRespTopTransactionDuration>;
    private 'sql_templates'?: Array<ShowAnalysisSessionResultRespSqlTemplates>;
    public constructor(totalCount?: number, topStateDuration?: Array<ShowAnalysisSessionResultRespTopStateDuration>, topTransactionDuration?: Array<ShowAnalysisSessionResultRespTopTransactionDuration>, sqlTemplates?: Array<ShowAnalysisSessionResultRespSqlTemplates>) { 
        this['total_count'] = totalCount;
        this['top_state_duration'] = topStateDuration;
        this['top_transaction_duration'] = topTransactionDuration;
        this['sql_templates'] = sqlTemplates;
    }
    public withTotalCount(totalCount: number): ShowAnalysisSessionResultResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTopStateDuration(topStateDuration: Array<ShowAnalysisSessionResultRespTopStateDuration>): ShowAnalysisSessionResultResp {
        this['top_state_duration'] = topStateDuration;
        return this;
    }
    public set topStateDuration(topStateDuration: Array<ShowAnalysisSessionResultRespTopStateDuration>  | undefined) {
        this['top_state_duration'] = topStateDuration;
    }
    public get topStateDuration(): Array<ShowAnalysisSessionResultRespTopStateDuration> | undefined {
        return this['top_state_duration'];
    }
    public withTopTransactionDuration(topTransactionDuration: Array<ShowAnalysisSessionResultRespTopTransactionDuration>): ShowAnalysisSessionResultResp {
        this['top_transaction_duration'] = topTransactionDuration;
        return this;
    }
    public set topTransactionDuration(topTransactionDuration: Array<ShowAnalysisSessionResultRespTopTransactionDuration>  | undefined) {
        this['top_transaction_duration'] = topTransactionDuration;
    }
    public get topTransactionDuration(): Array<ShowAnalysisSessionResultRespTopTransactionDuration> | undefined {
        return this['top_transaction_duration'];
    }
    public withSqlTemplates(sqlTemplates: Array<ShowAnalysisSessionResultRespSqlTemplates>): ShowAnalysisSessionResultResp {
        this['sql_templates'] = sqlTemplates;
        return this;
    }
    public set sqlTemplates(sqlTemplates: Array<ShowAnalysisSessionResultRespSqlTemplates>  | undefined) {
        this['sql_templates'] = sqlTemplates;
    }
    public get sqlTemplates(): Array<ShowAnalysisSessionResultRespSqlTemplates> | undefined {
        return this['sql_templates'];
    }
}