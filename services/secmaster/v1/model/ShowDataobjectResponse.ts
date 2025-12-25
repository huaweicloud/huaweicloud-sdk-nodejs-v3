import { DataObjectDetail } from './DataObjectDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataobjectResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    public data?: DataObjectDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowDataobjectResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowDataobjectResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ShowDataobjectResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: DataObjectDetail): ShowDataobjectResponse {
        this['data'] = data;
        return this;
    }
}