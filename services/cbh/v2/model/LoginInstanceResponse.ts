
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LoginInstanceResponse extends SdkResponse {
    private 'login_url'?: string;
    public constructor() { 
        super();
    }
    public withLoginUrl(loginUrl: string): LoginInstanceResponse {
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