import { CloudLogManagerVo } from './CloudLogManagerVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudLogPlatformResponse extends SdkResponse {
    public result?: Array<CloudLogManagerVo>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<CloudLogManagerVo>): ListCloudLogPlatformResponse {
        this['result'] = result;
        return this;
    }
}