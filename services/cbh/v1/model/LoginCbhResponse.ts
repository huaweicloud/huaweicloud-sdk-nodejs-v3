
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LoginCbhResponse extends SdkResponse {
    private 'login_url'?: string;
    public constructor() { 
        super();
    }
    public withLoginUrl(loginUrl: string): LoginCbhResponse {
        this['login_url'] = loginUrl;
        return this;
    }
    public set loginUrl(loginUrl: string  | undefined) {
        this['login_url'] = loginUrl;
    }
    public get loginUrl(): string | undefined {
        return this['login_url'];
    }
}