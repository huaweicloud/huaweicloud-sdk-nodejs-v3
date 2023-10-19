import { AddressItemListResponseDTOData } from './AddressItemListResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressItemsResponse extends SdkResponse {
    public data?: AddressItemListResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: AddressItemListResponseDTOData): ListAddressItemsResponse {
        this['data'] = data;
        return this;
    }
}