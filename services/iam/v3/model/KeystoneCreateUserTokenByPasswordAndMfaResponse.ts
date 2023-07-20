import { TokenResult } from './TokenResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateUserTokenByPasswordAndMfaResponse extends SdkResponse {
    public token?: TokenResult;
    private 'X-Subject-Token'?: string;
    public constructor() { 
        super();
    }
    public withToken(token: TokenResult): KeystoneCreateUserTokenByPasswordAndMfaResponse {
        this['token'] = token;
        return this;
    }
    public withXSubjectToken(xSubjectToken: string): KeystoneCreateUserTokenByPasswordAndMfaResponse {
        this['X-Subject-Token'] = xSubjectToken;
        return this;
    }
    public set xSubjectToken(xSubjectToken: string  | undefined) {
        this['X-Subject-Token'] = xSubjectToken;
    }
    public get xSubjectToken(): string | undefined {
        return this['X-Subject-Token'];
    }
}