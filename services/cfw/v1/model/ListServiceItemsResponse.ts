import { ServiceItemListResponseDtoData } from './ServiceItemListResponseDtoData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceItemsResponse extends SdkResponse {
    public data?: ServiceItemListResponseDtoData;
    public constructor() { 
        super();
    }
    public withData(data: ServiceItemListResponseDtoData): ListServiceItemsResponse {
        this['data'] = data;
        return this;
    }
}