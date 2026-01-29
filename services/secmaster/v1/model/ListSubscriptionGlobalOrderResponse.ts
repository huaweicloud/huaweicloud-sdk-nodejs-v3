import { SubscriptionGlobalResource } from './SubscriptionGlobalResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionGlobalOrderResponse extends SdkResponse {
    public resources?: Array<SubscriptionGlobalResource>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<SubscriptionGlobalResource>): ListSubscriptionGlobalOrderResponse {
        this['resources'] = resources;
        return this;
    }
}