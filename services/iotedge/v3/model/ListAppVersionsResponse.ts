import { PageInfoDTO } from './PageInfoDTO';
import { QueryAppVersionResponseDTO } from './QueryAppVersionResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppVersionsResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    private 'app_versions'?: Array<QueryAppVersionResponseDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppVersionsResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListAppVersionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withAppVersions(appVersions: Array<QueryAppVersionResponseDTO>): ListAppVersionsResponse {
        this['app_versions'] = appVersions;
        return this;
    }
    public set appVersions(appVersions: Array<QueryAppVersionResponseDTO>  | undefined) {
        this['app_versions'] = appVersions;
    }
    public get appVersions(): Array<QueryAppVersionResponseDTO> | undefined {
        return this['app_versions'];
    }
}