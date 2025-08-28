import { TypedStatBucket } from './TypedStatBucket';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBotMScoreDistributionResponse extends SdkResponse {
    public body?: Array<TypedStatBucket>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TypedStatBucket>): ListBotMScoreDistributionResponse {
        this['body'] = body;
        return this;
    }
}