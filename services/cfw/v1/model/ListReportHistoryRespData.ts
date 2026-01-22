import { ReportHistoryVO } from './ReportHistoryVO';


export class ListReportHistoryRespData {
    public limit?: number;
    public offset?: number;
    public records?: Array<ReportHistoryVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListReportHistoryRespData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListReportHistoryRespData {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<ReportHistoryVO>): ListReportHistoryRespData {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ListReportHistoryRespData {
        this['total'] = total;
        return this;
    }
}