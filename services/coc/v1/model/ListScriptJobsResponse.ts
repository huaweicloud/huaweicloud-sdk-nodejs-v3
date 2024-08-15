import { JobScriptOrderListPage } from './JobScriptOrderListPage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptJobsResponse extends SdkResponse {
    public data?: JobScriptOrderListPage;
    public constructor() { 
        super();
    }
    public withData(data: JobScriptOrderListPage): ListScriptJobsResponse {
        this['data'] = data;
        return this;
    }
}