import { ClusterNodeInfo } from './ClusterNodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterNodesResponse extends SdkResponse {
    private 'node_list'?: Array<ClusterNodeInfo>;
    public count?: number;
    private 'failed_count'?: number;
    public constructor() { 
        super();
    }
    public withNodeList(nodeList: Array<ClusterNodeInfo>): ListClusterNodesResponse {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<ClusterNodeInfo>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<ClusterNodeInfo> | undefined {
        return this['node_list'];
    }
    public withCount(count: number): ListClusterNodesResponse {
        this['count'] = count;
        return this;
    }
    public withFailedCount(failedCount: number): ListClusterNodesResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
}