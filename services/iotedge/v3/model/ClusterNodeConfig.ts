import { NodeConfig } from './NodeConfig';


export class ClusterNodeConfig {
    private 'master_node_vip'?: string;
    private 'master_nodes'?: Array<NodeConfig>;
    private 'work_nodes'?: Array<NodeConfig>;
    public constructor() { 
    }
    public withMasterNodeVip(masterNodeVip: string): ClusterNodeConfig {
        this['master_node_vip'] = masterNodeVip;
        return this;
    }
    public set masterNodeVip(masterNodeVip: string  | undefined) {
        this['master_node_vip'] = masterNodeVip;
    }
    public get masterNodeVip(): string | undefined {
        return this['master_node_vip'];
    }
    public withMasterNodes(masterNodes: Array<NodeConfig>): ClusterNodeConfig {
        this['master_nodes'] = masterNodes;
        return this;
    }
    public set masterNodes(masterNodes: Array<NodeConfig>  | undefined) {
        this['master_nodes'] = masterNodes;
    }
    public get masterNodes(): Array<NodeConfig> | undefined {
        return this['master_nodes'];
    }
    public withWorkNodes(workNodes: Array<NodeConfig>): ClusterNodeConfig {
        this['work_nodes'] = workNodes;
        return this;
    }
    public set workNodes(workNodes: Array<NodeConfig>  | undefined) {
        this['work_nodes'] = workNodes;
    }
    public get workNodes(): Array<NodeConfig> | undefined {
        return this['work_nodes'];
    }
}