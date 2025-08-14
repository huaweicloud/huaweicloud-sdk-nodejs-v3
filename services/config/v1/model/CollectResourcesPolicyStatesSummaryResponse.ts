import { PageInfo } from './PageInfo';
import { PolicyResourceComplianceSummary } from './PolicyResourceComplianceSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectResourcesPolicyStatesSummaryResponse extends SdkResponse {
    public value?: Array<PolicyResourceComplianceSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<PolicyResourceComplianceSummary>): CollectResourcesPolicyStatesSummaryResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): CollectResourcesPolicyStatesSummaryResponse {
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