import { DeployVo } from './DeployVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobInstanceDagResponse extends SdkResponse {
    public body?: Array<DeployVo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DeployVo>): ShowJobInstanceDagResponse {
        this['body'] = body;
        return this;
    }
}