import { ConformancePackComplianceDetail } from './ConformancePackComplianceDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConformancePackComplianceDetailsByPackIdResponse extends SdkResponse {
    public value?: Array<ConformancePackComplianceDetail>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<ConformancePackComplianceDetail>): ListConformancePackComplianceDetailsByPackIdResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListConformancePackComplianceDetailsByPackIdResponse {
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