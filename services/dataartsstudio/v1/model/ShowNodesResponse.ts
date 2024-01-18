import { JobAndNodeInfo } from './JobAndNodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodesResponse extends SdkResponse {
    public body?: Array<JobAndNodeInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<JobAndNodeInfo>): ShowNodesResponse {
        this['body'] = body;
        return this;
    }
}