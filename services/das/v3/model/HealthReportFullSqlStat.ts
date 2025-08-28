import { HealthReportSqlTemplate } from './HealthReportSqlTemplate';


export class HealthReportFullSqlStat {
    private 'collect_full_sql'?: boolean;
    private 'execute_top_templates'?: Array<HealthReportSqlTemplate>;
    private 'sum_rows_examined_top_templates'?: Array<HealthReportSqlTemplate>;
    private 'avg_cost_top_templates'?: Array<HealthReportSqlTemplate>;
    private 'analyze_success'?: boolean;
    private 'error_message'?: string;
    public constructor(collectFullSql?: boolean, executeTopTemplates?: Array<HealthReportSqlTemplate>, sumRowsExaminedTopTemplates?: Array<HealthReportSqlTemplate>, avgCostTopTemplates?: Array<HealthReportSqlTemplate>, analyzeSuccess?: boolean, errorMessage?: string) { 
        this['collect_full_sql'] = collectFullSql;
        this['execute_top_templates'] = executeTopTemplates;
        this['sum_rows_examined_top_templates'] = sumRowsExaminedTopTemplates;
        this['avg_cost_top_templates'] = avgCostTopTemplates;
        this['analyze_success'] = analyzeSuccess;
        this['error_message'] = errorMessage;
    }
    public withCollectFullSql(collectFullSql: boolean): HealthReportFullSqlStat {
        this['collect_full_sql'] = collectFullSql;
        return this;
    }
    public set collectFullSql(collectFullSql: boolean  | undefined) {
        this['collect_full_sql'] = collectFullSql;
    }
    public get collectFullSql(): boolean | undefined {
        return this['collect_full_sql'];
    }
    public withExecuteTopTemplates(executeTopTemplates: Array<HealthReportSqlTemplate>): HealthReportFullSqlStat {
        this['execute_top_templates'] = executeTopTemplates;
        return this;
    }
    public set executeTopTemplates(executeTopTemplates: Array<HealthReportSqlTemplate>  | undefined) {
        this['execute_top_templates'] = executeTopTemplates;
    }
    public get executeTopTemplates(): Array<HealthReportSqlTemplate> | undefined {
        return this['execute_top_templates'];
    }
    public withSumRowsExaminedTopTemplates(sumRowsExaminedTopTemplates: Array<HealthReportSqlTemplate>): HealthReportFullSqlStat {
        this['sum_rows_examined_top_templates'] = sumRowsExaminedTopTemplates;
        return this;
    }
    public set sumRowsExaminedTopTemplates(sumRowsExaminedTopTemplates: Array<HealthReportSqlTemplate>  | undefined) {
        this['sum_rows_examined_top_templates'] = sumRowsExaminedTopTemplates;
    }
    public get sumRowsExaminedTopTemplates(): Array<HealthReportSqlTemplate> | undefined {
        return this['sum_rows_examined_top_templates'];
    }
    public withAvgCostTopTemplates(avgCostTopTemplates: Array<HealthReportSqlTemplate>): HealthReportFullSqlStat {
        this['avg_cost_top_templates'] = avgCostTopTemplates;
        return this;
    }
    public set avgCostTopTemplates(avgCostTopTemplates: Array<HealthReportSqlTemplate>  | undefined) {
        this['avg_cost_top_templates'] = avgCostTopTemplates;
    }
    public get avgCostTopTemplates(): Array<HealthReportSqlTemplate> | undefined {
        return this['avg_cost_top_templates'];
    }
    public withAnalyzeSuccess(analyzeSuccess: boolean): HealthReportFullSqlStat {
        this['analyze_success'] = analyzeSuccess;
        return this;
    }
    public set analyzeSuccess(analyzeSuccess: boolean  | undefined) {
        this['analyze_success'] = analyzeSuccess;
    }
    public get analyzeSuccess(): boolean | undefined {
        return this['analyze_success'];
    }
    public withErrorMessage(errorMessage: string): HealthReportFullSqlStat {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}