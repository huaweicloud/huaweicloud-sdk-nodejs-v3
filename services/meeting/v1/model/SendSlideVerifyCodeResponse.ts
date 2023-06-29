
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SendSlideVerifyCodeResponse extends SdkResponse {
    public shadowImage?: string;
    public cutImage?: string;
    public pointY?: number;
    public token?: string;
    public expire?: number;
    public constructor() { 
        super();
    }
    public withShadowImage(shadowImage: string): SendSlideVerifyCodeResponse {
        this['shadowImage'] = shadowImage;
        return this;
    }
    public withCutImage(cutImage: string): SendSlideVerifyCodeResponse {
        this['cutImage'] = cutImage;
        return this;
    }
    public withPointY(pointY: number): SendSlideVerifyCodeResponse {
        this['pointY'] = pointY;
        return this;
    }
    public withToken(token: string): SendSlideVerifyCodeResponse {
        this['token'] = token;
        return this;
    }
    public withExpire(expire: number): SendSlideVerifyCodeResponse {
        this['expire'] = expire;
        return this;
    }
}