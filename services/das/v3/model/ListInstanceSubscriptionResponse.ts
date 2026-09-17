import { ReportSubscription } from './ReportSubscription';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSubscriptionResponse extends SdkResponse {
    public body?: Array<ReportSubscription>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReportSubscription>): ListInstanceSubscriptionResponse {
        this['body'] = body;
        return this;
    }
}