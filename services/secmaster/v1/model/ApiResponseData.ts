import { ApiResponseDataItem } from './ApiResponseDataItem';


export class ApiResponseData {
    public data?: Array<ApiResponseDataItem>;
    public limit?: number;
    public offset?: number;
    public total?: number;
    public constructor(data?: Array<ApiResponseDataItem>, limit?: number, offset?: number, total?: number) { 
        this['data'] = data;
        this['limit'] = limit;
        this['offset'] = offset;
        this['total'] = total;
    }
    public withData(data: Array<ApiResponseDataItem>): ApiResponseData {
        this['data'] = data;
        return this;
    }
    public withLimit(limit: number): ApiResponseData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ApiResponseData {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): ApiResponseData {
        this['total'] = total;
        return this;
    }
}