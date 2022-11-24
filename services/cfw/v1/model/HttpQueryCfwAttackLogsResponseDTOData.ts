import { HttpQueryCfwAttackLogsResponseDTODataRecords } from './HttpQueryCfwAttackLogsResponseDTODataRecords';


export class HttpQueryCfwAttackLogsResponseDTOData {
    public total?: number;
    public limit?: number;
    public records?: Array<HttpQueryCfwAttackLogsResponseDTODataRecords>;
    public constructor() { 
    }
    public withTotal(total: number): HttpQueryCfwAttackLogsResponseDTOData {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): HttpQueryCfwAttackLogsResponseDTOData {
        this['limit'] = limit;
        return this;
    }
    public withRecords(records: Array<HttpQueryCfwAttackLogsResponseDTODataRecords>): HttpQueryCfwAttackLogsResponseDTOData {
        this['records'] = records;
        return this;
    }
}