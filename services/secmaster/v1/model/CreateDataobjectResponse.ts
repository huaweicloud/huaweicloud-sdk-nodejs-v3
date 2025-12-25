import { DataObjectCreateUpdateResponse } from './DataObjectCreateUpdateResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataobjectResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    public data?: DataObjectCreateUpdateResponse;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateDataobjectResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateDataobjectResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): CreateDataobjectResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: DataObjectCreateUpdateResponse): CreateDataobjectResponse {
        this['data'] = data;
        return this;
    }
}