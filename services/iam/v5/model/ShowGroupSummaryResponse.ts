import { GroupSummary } from './GroupSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupSummaryResponse extends SdkResponse {
    public groups?: Array<GroupSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<GroupSummary>): ShowGroupSummaryResponse {
        this['groups'] = groups;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowGroupSummaryResponse {
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