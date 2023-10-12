import { OrgConformancePackStatus } from './OrgConformancePackStatus';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationConformancePackStatusesResponse extends SdkResponse {
    public statuses?: Array<OrgConformancePackStatus>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStatuses(statuses: Array<OrgConformancePackStatus>): ListOrganizationConformancePackStatusesResponse {
        this['statuses'] = statuses;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListOrganizationConformancePackStatusesResponse {
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