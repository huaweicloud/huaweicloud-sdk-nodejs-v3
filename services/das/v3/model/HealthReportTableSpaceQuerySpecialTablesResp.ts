import { HealthReportTableSpaceTablesDto } from './HealthReportTableSpaceTablesDto';


export class HealthReportTableSpaceQuerySpecialTablesResp {
    private 'total_count'?: number;
    private 'last_diagnose_timestamp'?: number;
    public tables?: Array<HealthReportTableSpaceTablesDto>;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): HealthReportTableSpaceQuerySpecialTablesResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withLastDiagnoseTimestamp(lastDiagnoseTimestamp: number): HealthReportTableSpaceQuerySpecialTablesResp {
        this['last_diagnose_timestamp'] = lastDiagnoseTimestamp;
        return this;
    }
    public set lastDiagnoseTimestamp(lastDiagnoseTimestamp: number  | undefined) {
        this['last_diagnose_timestamp'] = lastDiagnoseTimestamp;
    }
    public get lastDiagnoseTimestamp(): number | undefined {
        return this['last_diagnose_timestamp'];
    }
    public withTables(tables: Array<HealthReportTableSpaceTablesDto>): HealthReportTableSpaceQuerySpecialTablesResp {
        this['tables'] = tables;
        return this;
    }
}