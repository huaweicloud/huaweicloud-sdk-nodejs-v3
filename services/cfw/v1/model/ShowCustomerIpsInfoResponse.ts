import { CustomerIpsVO } from './CustomerIpsVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCustomerIpsInfoResponse extends SdkResponse {
    public data?: CustomerIpsVO;
    public constructor() { 
        super();
    }
    public withData(data: CustomerIpsVO): ShowCustomerIpsInfoResponse {
        this['data'] = data;
        return this;
    }
}