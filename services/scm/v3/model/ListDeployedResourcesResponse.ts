import { ResultDetail } from './ResultDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeployedResourcesResponse extends SdkResponse {
    public results?: Array<ResultDetail>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ResultDetail>): ListDeployedResourcesResponse {
        this['results'] = results;
        return this;
    }
}