import { ImpersonationToken } from './ImpersonationToken';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImpersonationTokensResponse extends SdkResponse {
    public body?: Array<ImpersonationToken>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ImpersonationToken>): ListImpersonationTokensResponse {
        this['body'] = body;
        return this;
    }
}