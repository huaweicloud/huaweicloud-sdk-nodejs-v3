import { AddressSetListResponseDTOData } from './AddressSetListResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressSetsResponse extends SdkResponse {
    public data?: AddressSetListResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: AddressSetListResponseDTOData): ListAddressSetsResponse {
        this['data'] = data;
        return this;
    }
}