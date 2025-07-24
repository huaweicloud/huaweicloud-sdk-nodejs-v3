
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowTestCaseResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): BatchShowTestCaseResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): BatchShowTestCaseResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): BatchShowTestCaseResponse {
        this['message'] = message;
        return this;
    }
}