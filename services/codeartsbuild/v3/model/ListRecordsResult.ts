import { BuildRecord } from './BuildRecord';
import { ListRecordsResultPagination } from './ListRecordsResultPagination';


export class ListRecordsResult {
    public pagination?: ListRecordsResultPagination;
    public data?: Array<BuildRecord>;
    public constructor() { 
    }
    public withPagination(pagination: ListRecordsResultPagination): ListRecordsResult {
        this['pagination'] = pagination;
        return this;
    }
    public withData(data: Array<BuildRecord>): ListRecordsResult {
        this['data'] = data;
        return this;
    }
}