import { LoginToken } from './LoginToken';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLoginTokenResponse extends SdkResponse {
    public logintoken?: LoginToken;
    private 'X-Subject-LoginToken'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLogintoken(logintoken: LoginToken): CreateLoginTokenResponse {
        this['logintoken'] = logintoken;
        return this;
    }
    public withXSubjectLoginToken(xSubjectLoginToken: string): CreateLoginTokenResponse {
        this['X-Subject-LoginToken'] = xSubjectLoginToken;
        return this;
    }
    public set xSubjectLoginToken(xSubjectLoginToken: string | undefined) {
        this['X-Subject-LoginToken'] = xSubjectLoginToken;
    }
    public get xSubjectLoginToken() {
        return this['X-Subject-LoginToken'];
    }
}