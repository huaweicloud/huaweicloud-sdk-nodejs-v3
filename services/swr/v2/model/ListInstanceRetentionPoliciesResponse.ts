import { ImageRetention } from './ImageRetention';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceRetentionPoliciesResponse extends SdkResponse {
    public total?: number;
    public retentions?: Array<ImageRetention>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceRetentionPoliciesResponse {
        this['total'] = total;
        return this;
    }
    public withRetentions(retentions: Array<ImageRetention>): ListInstanceRetentionPoliciesResponse {
        this['retentions'] = retentions;
        return this;
    }
}