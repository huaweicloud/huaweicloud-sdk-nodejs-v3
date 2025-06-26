import { WebhookPolicyDetail } from './WebhookPolicyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceWebhooksResponse extends SdkResponse {
    public policies?: Array<WebhookPolicyDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<WebhookPolicyDetail>): ListInstanceWebhooksResponse {
        this['policies'] = policies;
        return this;
    }
    public withTotal(total: number): ListInstanceWebhooksResponse {
        this['total'] = total;
        return this;
    }
}