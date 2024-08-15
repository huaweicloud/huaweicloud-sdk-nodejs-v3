import { JobScriptBatchDetailModel } from './JobScriptBatchDetailModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetScriptJobBatchResponse extends SdkResponse {
    public data?: JobScriptBatchDetailModel;
    public constructor() { 
        super();
    }
    public withData(data: JobScriptBatchDetailModel): GetScriptJobBatchResponse {
        this['data'] = data;
        return this;
    }
}