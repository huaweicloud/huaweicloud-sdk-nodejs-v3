
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportFactorResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportFactorResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ImportFactorResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ImportFactorResponse {
        this['message'] = message;
        return this;
    }
}