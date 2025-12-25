import { DataObjectDetail } from './DataObjectDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDataobjectResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    public data?: DataObjectDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateDataobjectResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateDataobjectResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): UpdateDataobjectResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: DataObjectDetail): UpdateDataobjectResponse {
        this['data'] = data;
        return this;
    }
}