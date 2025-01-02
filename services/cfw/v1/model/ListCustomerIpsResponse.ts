import { HttpListCustomerIpsResponseData } from './HttpListCustomerIpsResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomerIpsResponse extends SdkResponse {
    public data?: HttpListCustomerIpsResponseData;
    public constructor() { 
        super();
    }
    public withData(data: HttpListCustomerIpsResponseData): ListCustomerIpsResponse {
        this['data'] = data;
        return this;
    }
}