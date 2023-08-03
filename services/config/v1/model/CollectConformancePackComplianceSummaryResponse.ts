import { ConformancePackComplianceSummary } from './ConformancePackComplianceSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectConformancePackComplianceSummaryResponse extends SdkResponse {
    public value?: Array<ConformancePackComplianceSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<ConformancePackComplianceSummary>): CollectConformancePackComplianceSummaryResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): CollectConformancePackComplianceSummaryResponse {
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