import { PageInfoDTO } from './PageInfoDTO';
import { QueryClusterBriefResponseDTO } from './QueryClusterBriefResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public clusters?: Array<QueryClusterBriefResponseDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListClustersResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListClustersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withClusters(clusters: Array<QueryClusterBriefResponseDTO>): ListClustersResponse {
        this['clusters'] = clusters;
        return this;
    }
}