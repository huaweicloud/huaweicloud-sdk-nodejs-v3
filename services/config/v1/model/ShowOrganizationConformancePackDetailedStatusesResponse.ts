import { OrgConformancePackDetailedStatus } from './OrgConformancePackDetailedStatus';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationConformancePackDetailedStatusesResponse extends SdkResponse {
    public statuses?: Array<OrgConformancePackDetailedStatus>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStatuses(statuses: Array<OrgConformancePackDetailedStatus>): ShowOrganizationConformancePackDetailedStatusesResponse {
        this['statuses'] = statuses;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowOrganizationConformancePackDetailedStatusesResponse {
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