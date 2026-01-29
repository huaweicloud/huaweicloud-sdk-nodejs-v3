import { DeleteDpeDetail } from './DeleteDpeDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteClassifierResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DeleteDpeDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteClassifierResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteClassifierResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DeleteDpeDetail): DeleteClassifierResponse {
        this['data'] = data;
        return this;
    }
}