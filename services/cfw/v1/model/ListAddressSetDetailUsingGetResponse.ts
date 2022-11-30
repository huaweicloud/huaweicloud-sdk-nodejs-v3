import { AddressSetDetailResponseDTOData } from './AddressSetDetailResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressSetDetailUsingGetResponse extends SdkResponse {
    public data?: AddressSetDetailResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: AddressSetDetailResponseDTOData): ListAddressSetDetailUsingGetResponse {
        this['data'] = data;
        return this;
    }
}