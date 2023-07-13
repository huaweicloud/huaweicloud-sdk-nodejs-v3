import { RestartInstanceRsp } from './RestartInstanceRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RebootCloudTableClusterResponse extends SdkResponse {
    public body?: Array<RestartInstanceRsp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RestartInstanceRsp>): RebootCloudTableClusterResponse {
        this['body'] = body;
        return this;
    }
}