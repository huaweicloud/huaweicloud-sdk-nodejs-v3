import { AddressSetId } from './AddressSetId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAddressSetResponse extends SdkResponse {
    public data?: AddressSetId;
    public constructor() { 
        super();
    }
    public withData(data: AddressSetId): AddAddressSetResponse {
        this['data'] = data;
        return this;
    }
}