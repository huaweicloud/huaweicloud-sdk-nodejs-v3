import { ReportProfileVO } from './ReportProfileVO';


export class ListReportProfilesRespData {
    public limit?: number;
    public offset?: number;
    public records?: Array<ReportProfileVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListReportProfilesRespData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListReportProfilesRespData {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<ReportProfileVO>): ListReportProfilesRespData {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ListReportProfilesRespData {
        this['total'] = total;
        return this;
    }
}