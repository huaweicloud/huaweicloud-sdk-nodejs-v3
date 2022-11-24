import { HttpQueryCfwFlowLogsResponseDTODataRecords } from './HttpQueryCfwFlowLogsResponseDTODataRecords';


export class HttpQueryCfwFlowLogsResponseDTOData {
    public total?: number;
    public limit?: number;
    public records?: Array<HttpQueryCfwFlowLogsResponseDTODataRecords>;
    public constructor() { 
    }
    public withTotal(total: number): HttpQueryCfwFlowLogsResponseDTOData {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): HttpQueryCfwFlowLogsResponseDTOData {
        this['limit'] = limit;
        return this;
    }
    public withRecords(records: Array<HttpQueryCfwFlowLogsResponseDTODataRecords>): HttpQueryCfwFlowLogsResponseDTOData {
        this['records'] = records;
        return this;
    }
}