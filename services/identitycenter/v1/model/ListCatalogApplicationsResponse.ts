import { ApplicationTemplateDisplayDto } from './ApplicationTemplateDisplayDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCatalogApplicationsResponse extends SdkResponse {
    public applications?: Array<ApplicationTemplateDisplayDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withApplications(applications: Array<ApplicationTemplateDisplayDto>): ListCatalogApplicationsResponse {
        this['applications'] = applications;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListCatalogApplicationsResponse {
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