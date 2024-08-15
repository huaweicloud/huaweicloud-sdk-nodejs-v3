import { JobScriptOrderInfoModel } from './JobScriptOrderInfoModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetScriptJobInfoResponse extends SdkResponse {
    public data?: JobScriptOrderInfoModel;
    public constructor() { 
        super();
    }
    public withData(data: JobScriptOrderInfoModel): GetScriptJobInfoResponse {
        this['data'] = data;
        return this;
    }
}