
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddHbaConfsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): AddHbaConfsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): AddHbaConfsResponse {
        this['message'] = message;
        return this;
    }
}