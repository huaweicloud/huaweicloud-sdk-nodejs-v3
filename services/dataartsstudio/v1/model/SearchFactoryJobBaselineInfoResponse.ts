import { JobBaselineInfo } from './JobBaselineInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchFactoryJobBaselineInfoResponse extends SdkResponse {
    public body?: Array<JobBaselineInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<JobBaselineInfo>): SearchFactoryJobBaselineInfoResponse {
        this['body'] = body;
        return this;
    }
}