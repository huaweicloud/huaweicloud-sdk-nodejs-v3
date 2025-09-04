import { PageInfoDTO } from './PageInfoDTO';
import { QueryAuthorizedNodeDTO } from './QueryAuthorizedNodeDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNaAuthorizedNodesResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public nodes?: Array<QueryAuthorizedNodeDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListNaAuthorizedNodesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListNaAuthorizedNodesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withNodes(nodes: Array<QueryAuthorizedNodeDTO>): ListNaAuthorizedNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
}