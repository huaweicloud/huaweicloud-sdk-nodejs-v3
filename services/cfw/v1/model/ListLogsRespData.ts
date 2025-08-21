import { LogVO } from './LogVO';


export class ListLogsRespData {
    public limit?: number;
    public records?: Array<LogVO>;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListLogsRespData {
        this['limit'] = limit;
        return this;
    }
    public withRecords(records: Array<LogVO>): ListLogsRespData {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ListLogsRespData {
        this['total'] = total;
        return this;
    }
}