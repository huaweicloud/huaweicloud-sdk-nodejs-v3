import { PageInfo } from './PageInfo';
import { RemediationExecutionStatus } from './RemediationExecutionStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectRemediationExecutionStatusesSummaryResponse extends SdkResponse {
    public value?: Array<RemediationExecutionStatus>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<RemediationExecutionStatus>): CollectRemediationExecutionStatusesSummaryResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): CollectRemediationExecutionStatusesSummaryResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}