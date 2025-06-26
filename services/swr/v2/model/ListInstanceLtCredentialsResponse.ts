import { AuthToken } from './AuthToken';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceLtCredentialsResponse extends SdkResponse {
    public total?: number;
    private 'auth_tokens'?: Array<AuthToken>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceLtCredentialsResponse {
        this['total'] = total;
        return this;
    }
    public withAuthTokens(authTokens: Array<AuthToken>): ListInstanceLtCredentialsResponse {
        this['auth_tokens'] = authTokens;
        return this;
    }
    public set authTokens(authTokens: Array<AuthToken>  | undefined) {
        this['auth_tokens'] = authTokens;
    }
    public get authTokens(): Array<AuthToken> | undefined {
        return this['auth_tokens'];
    }
}