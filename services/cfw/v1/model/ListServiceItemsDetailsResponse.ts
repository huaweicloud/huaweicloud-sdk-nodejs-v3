import { ServiceItemListResponseDtoData } from './ServiceItemListResponseDtoData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceItemsDetailsResponse extends SdkResponse {
    public data?: ServiceItemListResponseDtoData;
    public constructor() { 
        super();
    }
    public withData(data: ServiceItemListResponseDtoData): ListServiceItemsDetailsResponse {
        this['data'] = data;
        return this;
    }
}