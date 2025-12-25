import { DeleteDpeDetail } from './DeleteDpeDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMappingInfoResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DeleteDpeDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteMappingInfoResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteMappingInfoResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DeleteDpeDetail): DeleteMappingInfoResponse {
        this['data'] = data;
        return this;
    }
}