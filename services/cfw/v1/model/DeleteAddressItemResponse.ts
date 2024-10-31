import { AddressItemId } from './AddressItemId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAddressItemResponse extends SdkResponse {
    public data?: AddressItemId;
    public constructor() { 
        super();
    }
    public withData(data: AddressItemId): DeleteAddressItemResponse {
        this['data'] = data;
        return this;
    }
}