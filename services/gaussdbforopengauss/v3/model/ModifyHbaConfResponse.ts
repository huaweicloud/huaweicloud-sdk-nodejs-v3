
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyHbaConfResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ModifyHbaConfResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ModifyHbaConfResponse {
        this['message'] = message;
        return this;
    }
}