
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SendUserEmailVerifyCodeResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SendUserEmailVerifyCodeResponse {
        this['result'] = result;
        return this;
    }
}