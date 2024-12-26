import { PageInfoCustomerIpsListVO } from './PageInfoCustomerIpsListVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomerIpsResponse extends SdkResponse {
    public data?: PageInfoCustomerIpsListVO;
    public constructor() { 
        super();
    }
    public withData(data: PageInfoCustomerIpsListVO): ListCustomerIpsResponse {
        this['data'] = data;
        return this;
    }
}