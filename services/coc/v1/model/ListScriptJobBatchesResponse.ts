import { JobScriptBatchListModel } from './JobScriptBatchListModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptJobBatchesResponse extends SdkResponse {
    public data?: Array<JobScriptBatchListModel>;
    public constructor() { 
        super();
    }
    public withData(data: Array<JobScriptBatchListModel>): ListScriptJobBatchesResponse {
        this['data'] = data;
        return this;
    }
}