import { EpsInfo } from './EpsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnterpriseProjectsResponse extends SdkResponse {
    public data?: Array<EpsInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<EpsInfo>): ListEnterpriseProjectsResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListEnterpriseProjectsResponse {
        this['total'] = total;
        return this;
    }
}