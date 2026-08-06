import { HealthReportTableSpaceTopDataDto } from './HealthReportTableSpaceTopDataDto';


export class HealthReportTableSpaceQueryRapidGrowthTablesResp {
    public tables?: Array<HealthReportTableSpaceTopDataDto>;
    public threshold?: number;
    private 'last_diagnose_timestamp'?: number;
    public constructor() { 
    }
    public withTables(tables: Array<HealthReportTableSpaceTopDataDto>): HealthReportTableSpaceQueryRapidGrowthTablesResp {
        this['tables'] = tables;
        return this;
    }
    public withThreshold(threshold: number): HealthReportTableSpaceQueryRapidGrowthTablesResp {
        this['threshold'] = threshold;
        return this;
    }
    public withLastDiagnoseTimestamp(lastDiagnoseTimestamp: number): HealthReportTableSpaceQueryRapidGrowthTablesResp {
        this['last_diagnose_timestamp'] = lastDiagnoseTimestamp;
        return this;
    }
    public set lastDiagnoseTimestamp(lastDiagnoseTimestamp: number  | undefined) {
        this['last_diagnose_timestamp'] = lastDiagnoseTimestamp;
    }
    public get lastDiagnoseTimestamp(): number | undefined {
        return this['last_diagnose_timestamp'];
    }
}