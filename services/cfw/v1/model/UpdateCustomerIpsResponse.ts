import { UpdateCustomerIpsRespData } from './UpdateCustomerIpsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCustomerIpsResponse extends SdkResponse {
    public data?: UpdateCustomerIpsRespData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateCustomerIpsRespData): UpdateCustomerIpsResponse {
        this['data'] = data;
        return this;
    }
}