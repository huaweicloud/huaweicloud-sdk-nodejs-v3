import { ServiceItemIds } from './ServiceItemIds';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddServiceItemsUsingPostResponse extends SdkResponse {
    public data?: ServiceItemIds;
    public constructor() { 
        super();
    }
    public withData(data: ServiceItemIds): AddServiceItemsUsingPostResponse {
        this['data'] = data;
        return this;
    }
}