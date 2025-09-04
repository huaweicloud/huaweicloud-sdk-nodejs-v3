import { PageInfoDTO } from './PageInfoDTO';
import { QueryApplicationBriefResponseDTO } from './QueryApplicationBriefResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListEdgeAppsResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    private 'edge_apps'?: Array<QueryApplicationBriefResponseDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListEdgeAppsResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListEdgeAppsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withEdgeApps(edgeApps: Array<QueryApplicationBriefResponseDTO>): BatchListEdgeAppsResponse {
        this['edge_apps'] = edgeApps;
        return this;
    }
    public set edgeApps(edgeApps: Array<QueryApplicationBriefResponseDTO>  | undefined) {
        this['edge_apps'] = edgeApps;
    }
    public get edgeApps(): Array<QueryApplicationBriefResponseDTO> | undefined {
        return this['edge_apps'];
    }
}