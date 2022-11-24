import { AddressSetListResponseDTOData } from './AddressSetListResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddressSetListUsingGetResponse extends SdkResponse {
    public data?: AddressSetListResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: AddressSetListResponseDTOData): ListAddressSetListUsingGetResponse {
        this['data'] = data;
        return this;
    }
}