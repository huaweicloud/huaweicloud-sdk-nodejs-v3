import { TopologyTree } from './TopologyTree';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopologyTreeResponse extends SdkResponse {
    private 'topology_tree'?: TopologyTree;
    public constructor() { 
        super();
    }
    public withTopologyTree(topologyTree: TopologyTree): ShowTopologyTreeResponse {
        this['topology_tree'] = topologyTree;
        return this;
    }
    public set topologyTree(topologyTree: TopologyTree  | undefined) {
        this['topology_tree'] = topologyTree;
    }
    public get topologyTree(): TopologyTree | undefined {
        return this['topology_tree'];
    }
}