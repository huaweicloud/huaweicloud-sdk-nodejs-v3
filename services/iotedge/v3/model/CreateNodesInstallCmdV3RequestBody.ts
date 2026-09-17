import { NodeConfig } from './NodeConfig';


export class CreateNodesInstallCmdV3RequestBody {
    private 'node_info'?: Array<NodeConfig>;
    public constructor() { 
    }
    public withNodeInfo(nodeInfo: Array<NodeConfig>): CreateNodesInstallCmdV3RequestBody {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: Array<NodeConfig>  | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo(): Array<NodeConfig> | undefined {
        return this['node_info'];
    }
}