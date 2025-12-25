import { DeleteDpeDetail } from './DeleteDpeDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteSingleMapperResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DeleteDpeDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteSingleMapperResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteSingleMapperResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DeleteDpeDetail): DeleteSingleMapperResponse {
        this['data'] = data;
        return this;
    }
}