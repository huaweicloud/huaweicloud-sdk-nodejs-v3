import { AddressSetDetailResponseDTOData } from './AddressSetDetailResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressSetDetailResponse extends SdkResponse {
    public data?: AddressSetDetailResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: AddressSetDetailResponseDTOData): ListAddressSetDetailResponse {
        this['data'] = data;
        return this;
    }
}