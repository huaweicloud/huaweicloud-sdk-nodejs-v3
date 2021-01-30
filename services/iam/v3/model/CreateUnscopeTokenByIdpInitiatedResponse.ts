import { IdpToken } from './IdpToken';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUnscopeTokenByIdpInitiatedResponse extends SdkResponse {
    public token?: IdpToken;
    private 'X-Subject-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withToken(token: IdpToken): CreateUnscopeTokenByIdpInitiatedResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): CreateUnscopeTokenByIdpInitiatedResponse {
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