import { NodeConfig } from './NodeConfig';


export class ClusterNodeConfig {
    private 'master_node_vip'?: string;
    private 'dmz_vip'?: string;
    private 'interface_name'?: string;
    private 'master_nodes'?: Array<NodeConfig>;
    private 'dmz_nodes'?: Array<NodeConfig>;
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
    public withDmzVip(dmzVip: string): ClusterNodeConfig {
        this['dmz_vip'] = dmzVip;
        return this;
    }
    public set dmzVip(dmzVip: string  | undefined) {
        this['dmz_vip'] = dmzVip;
    }
    public get dmzVip(): string | undefined {
        return this['dmz_vip'];
    }
    public withInterfaceName(interfaceName: string): ClusterNodeConfig {
        this['interface_name'] = interfaceName;
        return this;
    }
    public set interfaceName(interfaceName: string  | undefined) {
        this['interface_name'] = interfaceName;
    }
    public get interfaceName(): string | undefined {
        return this['interface_name'];
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
    public withDmzNodes(dmzNodes: Array<NodeConfig>): ClusterNodeConfig {
        this['dmz_nodes'] = dmzNodes;
        return this;
    }
    public set dmzNodes(dmzNodes: Array<NodeConfig>  | undefined) {
        this['dmz_nodes'] = dmzNodes;
    }
    public get dmzNodes(): Array<NodeConfig> | undefined {
        return this['dmz_nodes'];
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