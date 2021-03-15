import { ScopedTokenInfo } from './ScopedTokenInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTokenWithIdTokenResponse extends SdkResponse {
    public token?: ScopedTokenInfo;
    private 'X-Subject-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withToken(token: ScopedTokenInfo): CreateTokenWithIdTokenResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): CreateTokenWithIdTokenResponse {
        this['X-Subject-Token'] = xSubjectToken;
        return this;
    }
    public set xSubjectToken(xSubjectToken: string | undefined) {
        this['X-Subject-Token'] = xSubjectToken;
    }
    public get xSubjectToken() {
        return this['X-Subject-Token'];
    }
}