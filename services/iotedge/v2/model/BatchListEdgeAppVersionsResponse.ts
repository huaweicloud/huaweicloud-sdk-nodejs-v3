import { PageInfoDTO } from './PageInfoDTO';
import { QueryEdgeAppVersionBriefResponseDTO } from './QueryEdgeAppVersionBriefResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListEdgeAppVersionsResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public versions?: Array<QueryEdgeAppVersionBriefResponseDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListEdgeAppVersionsResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListEdgeAppVersionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withVersions(versions: Array<QueryEdgeAppVersionBriefResponseDTO>): BatchListEdgeAppVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}