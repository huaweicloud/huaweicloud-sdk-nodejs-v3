import { ServiceItemIds } from './ServiceItemIds';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddServiceItemsResponse extends SdkResponse {
    public data?: ServiceItemIds;
    public constructor() { 
        super();
    }
    public withData(data: ServiceItemIds): AddServiceItemsResponse {
        this['data'] = data;
        return this;
    }
}