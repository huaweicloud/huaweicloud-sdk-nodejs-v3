
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckSlideVerifyCodeResponse extends SdkResponse {
    public token?: string;
    public expire?: number;
    public constructor() { 
        super();
    }
    public withToken(token: string): CheckSlideVerifyCodeResponse {
        this['token'] = token;
        return this;
    }
    public withExpire(expire: number): CheckSlideVerifyCodeResponse {
        this['expire'] = expire;
        return this;
    }
}