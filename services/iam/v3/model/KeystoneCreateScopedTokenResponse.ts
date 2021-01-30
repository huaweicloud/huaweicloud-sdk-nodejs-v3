import { ScopeTokenResult } from './ScopeTokenResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateScopedTokenResponse extends SdkResponse {
    public token?: ScopeTokenResult;
    private 'X-Subject-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withToken(token: ScopeTokenResult): KeystoneCreateScopedTokenResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): KeystoneCreateScopedTokenResponse {
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