import { DataObjectDetail } from './DataObjectDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataobjectsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public success?: boolean;
    public data?: Array<DataObjectDetail>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListDataobjectsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListDataobjectsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListDataobjectsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListDataobjectsResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListDataobjectsResponse {
        this['page'] = page;
        return this;
    }
    public withSuccess(success: boolean): ListDataobjectsResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<DataObjectDetail>): ListDataobjectsResponse {
        this['data'] = data;
        return this;
    }
}