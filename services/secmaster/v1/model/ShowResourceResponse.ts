import { ResourceDetail } from './ResourceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ResourceDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowResourceResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowResourceResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ResourceDetail): ShowResourceResponse {
        this['data'] = data;
        return this;
    }
}