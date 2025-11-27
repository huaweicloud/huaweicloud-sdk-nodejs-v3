import { EnterpriseProjectCollectQueryResponseData } from './EnterpriseProjectCollectQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnterpriseProjectCollectResponse extends SdkResponse {
    public data?: Array<EnterpriseProjectCollectQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<EnterpriseProjectCollectQueryResponseData>): ListEnterpriseProjectCollectResponse {
        this['data'] = data;
        return this;
    }
}