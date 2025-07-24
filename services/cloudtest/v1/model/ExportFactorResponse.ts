
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportFactorResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ExportFactorResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ExportFactorResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ExportFactorResponse {
        this['message'] = message;
        return this;
    }
}