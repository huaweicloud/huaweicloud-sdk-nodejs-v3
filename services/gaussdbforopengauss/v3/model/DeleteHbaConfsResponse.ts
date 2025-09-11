
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHbaConfsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteHbaConfsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteHbaConfsResponse {
        this['message'] = message;
        return this;
    }
}