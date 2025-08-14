import { BearerToken } from './BearerToken';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBearerTokensResponse extends SdkResponse {
    private 'bearer_tokens'?: Array<BearerToken>;
    public constructor() { 
        super();
    }
    public withBearerTokens(bearerTokens: Array<BearerToken>): ListBearerTokensResponse {
        this['bearer_tokens'] = bearerTokens;
        return this;
    }
    public set bearerTokens(bearerTokens: Array<BearerToken>  | undefined) {
        this['bearer_tokens'] = bearerTokens;
    }
    public get bearerTokens(): Array<BearerToken> | undefined {
        return this['bearer_tokens'];
    }
}