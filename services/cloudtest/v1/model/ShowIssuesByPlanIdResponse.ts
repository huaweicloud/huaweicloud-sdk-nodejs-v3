import { TestPlanIssueDetail } from './TestPlanIssueDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIssuesByPlanIdResponse extends SdkResponse {
    public body?: Array<TestPlanIssueDetail>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TestPlanIssueDetail>): ShowIssuesByPlanIdResponse {
        this['body'] = body;
        return this;
    }
}