
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckVerifyCodeResponse extends SdkResponse {
    public token?: string;
    public expire?: number;
    public constructor() { 
        super();
    }
    public withToken(token: string): CheckVerifyCodeResponse {
        this['token'] = token;
        return this;
    }
    public withExpire(expire: number): CheckVerifyCodeResponse {
        this['expire'] = expire;
        return this;
    }
}