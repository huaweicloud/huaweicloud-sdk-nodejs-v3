import { BasePaginationResponseEntity } from './BasePaginationResponseEntity';
import { ListAttentionResult } from './ListAttentionResult';


export class ListAttentionPageResult {
    public totalRecords?: number;
    public totalPages?: number;
    public data?: Array<ListAttentionResult>;
    public constructor() { 
    }
    public withTotalRecords(totalRecords: number): ListAttentionPageResult {
        this['totalRecords'] = totalRecords;
        return this;
    }
    public withTotalPages(totalPages: number): ListAttentionPageResult {
        this['totalPages'] = totalPages;
        return this;
    }
    public withData(data: Array<ListAttentionResult>): ListAttentionPageResult {
        this['data'] = data;
        return this;
    }
}