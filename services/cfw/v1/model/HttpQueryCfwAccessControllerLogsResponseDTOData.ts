import { HttpQueryCfwAccessControllerLogsResponseDTODataRecords } from './HttpQueryCfwAccessControllerLogsResponseDTODataRecords';


export class HttpQueryCfwAccessControllerLogsResponseDTOData {
    public total?: number;
    public limit?: number;
    public records?: Array<HttpQueryCfwAccessControllerLogsResponseDTODataRecords>;
    public constructor() { 
    }
    public withTotal(total: number): HttpQueryCfwAccessControllerLogsResponseDTOData {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): HttpQueryCfwAccessControllerLogsResponseDTOData {
        this['limit'] = limit;
        return this;
    }
    public withRecords(records: Array<HttpQueryCfwAccessControllerLogsResponseDTODataRecords>): HttpQueryCfwAccessControllerLogsResponseDTOData {
        this['records'] = records;
        return this;
    }
}