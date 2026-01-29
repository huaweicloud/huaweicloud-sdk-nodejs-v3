
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMappingFunctionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMappingFunctionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowMappingFunctionResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: object): ShowMappingFunctionResponse {
        this['data'] = data;
        return this;
    }
}