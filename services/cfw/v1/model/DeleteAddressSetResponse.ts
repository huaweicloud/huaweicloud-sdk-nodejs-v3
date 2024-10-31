import { AddressSetId } from './AddressSetId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAddressSetResponse extends SdkResponse {
    public data?: AddressSetId;
    public constructor() { 
        super();
    }
    public withData(data: AddressSetId): DeleteAddressSetResponse {
        this['data'] = data;
        return this;
    }
}