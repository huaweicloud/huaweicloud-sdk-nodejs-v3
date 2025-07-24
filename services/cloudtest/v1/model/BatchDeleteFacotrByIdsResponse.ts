
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteFacotrByIdsResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): BatchDeleteFacotrByIdsResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): BatchDeleteFacotrByIdsResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): BatchDeleteFacotrByIdsResponse {
        this['message'] = message;
        return this;
    }
}