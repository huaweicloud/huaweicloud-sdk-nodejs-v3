import { UnscopedTokenInfo } from './UnscopedTokenInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUnscopedTokenWithIdTokenResponse extends SdkResponse {
    public token?: UnscopedTokenInfo;
    private 'X-Subject-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withToken(token: UnscopedTokenInfo): CreateUnscopedTokenWithIdTokenResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): CreateUnscopedTokenWithIdTokenResponse {
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