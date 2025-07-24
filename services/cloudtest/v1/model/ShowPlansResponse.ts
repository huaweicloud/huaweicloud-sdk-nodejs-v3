import { TestPlanDetail } from './TestPlanDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPlansResponse extends SdkResponse {
    public body?: Array<TestPlanDetail>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TestPlanDetail>): ShowPlansResponse {
        this['body'] = body;
        return this;
    }
}