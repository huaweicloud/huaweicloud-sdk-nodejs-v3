
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomizedCheckitemResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateCustomizedCheckitemResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateCustomizedCheckitemResponse {
        this['message'] = message;
        return this;
    }
}