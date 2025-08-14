import { ApplicationDto } from './ApplicationDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationsResponse extends SdkResponse {
    public applications?: Array<ApplicationDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withApplications(applications: Array<ApplicationDto>): ListApplicationsResponse {
        this['applications'] = applications;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListApplicationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}