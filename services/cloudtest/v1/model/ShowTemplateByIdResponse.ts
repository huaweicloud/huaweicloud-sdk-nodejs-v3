
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowTemplateByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ShowTemplateByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowTemplateByIdResponse {
        this['message'] = message;
        return this;
    }
}