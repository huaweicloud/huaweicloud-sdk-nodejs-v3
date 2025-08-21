import { CustomerIpsPageInfo } from './CustomerIpsPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomerIpsResponse extends SdkResponse {
    public data?: CustomerIpsPageInfo;
    public constructor() { 
        super();
    }
    public withData(data: CustomerIpsPageInfo): ListCustomerIpsResponse {
        this['data'] = data;
        return this;
    }
}