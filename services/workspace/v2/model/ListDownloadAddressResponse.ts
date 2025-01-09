import { DownloadAddressForList } from './DownloadAddressForList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDownloadAddressResponse extends SdkResponse {
    public address?: Array<DownloadAddressForList>;
    public constructor() { 
        super();
    }
    public withAddress(address: Array<DownloadAddressForList>): ListDownloadAddressResponse {
        this['address'] = address;
        return this;
    }
}