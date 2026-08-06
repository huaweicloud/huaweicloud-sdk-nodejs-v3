import { HealthReportTableSpaceQueryRapidGrowthTablesResp } from './HealthReportTableSpaceQueryRapidGrowthTablesResp';
import { HealthReportTableSpaceQuerySpaceTopResp } from './HealthReportTableSpaceQuerySpaceTopResp';
import { HealthReportTableSpaceQuerySpecialTablesResp } from './HealthReportTableSpaceQuerySpecialTablesResp';


export class HealthReportTableSpaceNewStat {
    private 'database_top_resp'?: Array<HealthReportTableSpaceQuerySpaceTopResp>;
    private 'table_top_resp'?: Array<HealthReportTableSpaceQuerySpaceTopResp>;
    private 'rapid_growth_tables_resp'?: Array<HealthReportTableSpaceQueryRapidGrowthTablesResp>;
    private 'no_primary_tables_resp'?: Array<HealthReportTableSpaceQuerySpecialTablesResp>;
    private 'no_index_tables_resp'?: Array<HealthReportTableSpaceQuerySpecialTablesResp>;
    public constructor() { 
    }
    public withDatabaseTopResp(databaseTopResp: Array<HealthReportTableSpaceQuerySpaceTopResp>): HealthReportTableSpaceNewStat {
        this['database_top_resp'] = databaseTopResp;
        return this;
    }
    public set databaseTopResp(databaseTopResp: Array<HealthReportTableSpaceQuerySpaceTopResp>  | undefined) {
        this['database_top_resp'] = databaseTopResp;
    }
    public get databaseTopResp(): Array<HealthReportTableSpaceQuerySpaceTopResp> | undefined {
        return this['database_top_resp'];
    }
    public withTableTopResp(tableTopResp: Array<HealthReportTableSpaceQuerySpaceTopResp>): HealthReportTableSpaceNewStat {
        this['table_top_resp'] = tableTopResp;
        return this;
    }
    public set tableTopResp(tableTopResp: Array<HealthReportTableSpaceQuerySpaceTopResp>  | undefined) {
        this['table_top_resp'] = tableTopResp;
    }
    public get tableTopResp(): Array<HealthReportTableSpaceQuerySpaceTopResp> | undefined {
        return this['table_top_resp'];
    }
    public withRapidGrowthTablesResp(rapidGrowthTablesResp: Array<HealthReportTableSpaceQueryRapidGrowthTablesResp>): HealthReportTableSpaceNewStat {
        this['rapid_growth_tables_resp'] = rapidGrowthTablesResp;
        return this;
    }
    public set rapidGrowthTablesResp(rapidGrowthTablesResp: Array<HealthReportTableSpaceQueryRapidGrowthTablesResp>  | undefined) {
        this['rapid_growth_tables_resp'] = rapidGrowthTablesResp;
    }
    public get rapidGrowthTablesResp(): Array<HealthReportTableSpaceQueryRapidGrowthTablesResp> | undefined {
        return this['rapid_growth_tables_resp'];
    }
    public withNoPrimaryTablesResp(noPrimaryTablesResp: Array<HealthReportTableSpaceQuerySpecialTablesResp>): HealthReportTableSpaceNewStat {
        this['no_primary_tables_resp'] = noPrimaryTablesResp;
        return this;
    }
    public set noPrimaryTablesResp(noPrimaryTablesResp: Array<HealthReportTableSpaceQuerySpecialTablesResp>  | undefined) {
        this['no_primary_tables_resp'] = noPrimaryTablesResp;
    }
    public get noPrimaryTablesResp(): Array<HealthReportTableSpaceQuerySpecialTablesResp> | undefined {
        return this['no_primary_tables_resp'];
    }
    public withNoIndexTablesResp(noIndexTablesResp: Array<HealthReportTableSpaceQuerySpecialTablesResp>): HealthReportTableSpaceNewStat {
        this['no_index_tables_resp'] = noIndexTablesResp;
        return this;
    }
    public set noIndexTablesResp(noIndexTablesResp: Array<HealthReportTableSpaceQuerySpecialTablesResp>  | undefined) {
        this['no_index_tables_resp'] = noIndexTablesResp;
    }
    public get noIndexTablesResp(): Array<HealthReportTableSpaceQuerySpecialTablesResp> | undefined {
        return this['no_index_tables_resp'];
    }
}