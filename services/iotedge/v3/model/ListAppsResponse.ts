import { PageInfoDTO } from './PageInfoDTO';
import { QueryAppBriefResponseDTO } from './QueryAppBriefResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public apps?: Array<QueryAppBriefResponseDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppsResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListAppsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withApps(apps: Array<QueryAppBriefResponseDTO>): ListAppsResponse {
        this['apps'] = apps;
        return this;
    }
}