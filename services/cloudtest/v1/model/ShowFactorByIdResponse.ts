
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactorByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowFactorByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ShowFactorByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowFactorByIdResponse {
        this['message'] = message;
        return this;
    }
}