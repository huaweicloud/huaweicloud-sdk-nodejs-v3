
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTemplateByIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteTemplateByIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): DeleteTemplateByIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DeleteTemplateByIdResponse {
        this['message'] = message;
        return this;
    }
}