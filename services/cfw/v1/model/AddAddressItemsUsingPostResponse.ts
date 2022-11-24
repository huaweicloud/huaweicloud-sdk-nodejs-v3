import { AddressItems } from './AddressItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAddressItemsUsingPostResponse extends SdkResponse {
    public data?: AddressItems;
    public constructor() { 
        super();
    }
    public withData(data: AddressItems): AddAddressItemsUsingPostResponse {
        this['data'] = data;
        return this;
    }
}