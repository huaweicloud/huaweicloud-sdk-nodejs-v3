import { ResourceDetail } from './ResourceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public limit?: number;
    public offset?: number;
    public success?: boolean;
    public data?: Array<ResourceDetail>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListResourcesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListResourcesResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListResourcesResponse {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): ListResourcesResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourcesResponse {
        this['offset'] = offset;
        return this;
    }
    public withSuccess(success: boolean): ListResourcesResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<ResourceDetail>): ListResourcesResponse {
        this['data'] = data;
        return this;
    }
}