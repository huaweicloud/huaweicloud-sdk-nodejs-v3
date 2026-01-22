import { CreateCustomerIpsRespData } from './CreateCustomerIpsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomerIpsResponse extends SdkResponse {
    public data?: CreateCustomerIpsRespData;
    public constructor() { 
        super();
    }
    public withData(data: CreateCustomerIpsRespData): CreateCustomerIpsResponse {
        this['data'] = data;
        return this;
    }
}