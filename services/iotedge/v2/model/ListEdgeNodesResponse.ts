import { EdgeNodeDTO } from './EdgeNodeDTO';
import { PageInfoDTO } from './PageInfoDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEdgeNodesResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public nodes?: Array<EdgeNodeDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListEdgeNodesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListEdgeNodesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withNodes(nodes: Array<EdgeNodeDTO>): ListEdgeNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
}