
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchBaselineResponse extends SdkResponse {
    public code?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public success?: boolean;
    public data?: Array<object>;
    public constructor() { 
        super();
    }
    public withCode(code: string): SearchBaselineResponse {
        this['code'] = code;
        return this;
    }
    public withTotal(total: number): SearchBaselineResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): SearchBaselineResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): SearchBaselineResponse {
        this['page'] = page;
        return this;
    }
    public withSuccess(success: boolean): SearchBaselineResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<object>): SearchBaselineResponse {
        this['data'] = data;
        return this;
    }
}