import { CloudLogManagerVo } from './CloudLogManagerVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudLogManagesResponse extends SdkResponse {
    public result?: Array<CloudLogManagerVo>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<CloudLogManagerVo>): ListCloudLogManagesResponse {
        this['result'] = result;
        return this;
    }
}