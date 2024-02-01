import { InstancesWeight } from './InstancesWeight';


export class CreateMysqlMultiProxyRequest {
    private 'flavor_ref'?: string;
    private 'node_num'?: number;
    private 'proxy_name'?: string;
    private 'proxy_mode'?: string;
    private 'route_mode'?: number;
    private 'nodes_read_weight'?: Array<InstancesWeight>;
    private 'subnet_id'?: string;
    public constructor(flavorRef?: string, nodeNum?: number, nodesReadWeight?: Array<InstancesWeight>) { 
        this['flavor_ref'] = flavorRef;
        this['node_num'] = nodeNum;
        this['nodes_read_weight'] = nodesReadWeight;
    }
    public withFlavorRef(flavorRef: string): CreateMysqlMultiProxyRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withNodeNum(nodeNum: number): CreateMysqlMultiProxyRequest {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withProxyName(proxyName: string): CreateMysqlMultiProxyRequest {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withProxyMode(proxyMode: string): CreateMysqlMultiProxyRequest {
        this['proxy_mode'] = proxyMode;
        return this;
    }
    public set proxyMode(proxyMode: string  | undefined) {
        this['proxy_mode'] = proxyMode;
    }
    public get proxyMode(): string | undefined {
        return this['proxy_mode'];
    }
    public withRouteMode(routeMode: number): CreateMysqlMultiProxyRequest {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: number  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): number | undefined {
        return this['route_mode'];
    }
    public withNodesReadWeight(nodesReadWeight: Array<InstancesWeight>): CreateMysqlMultiProxyRequest {
        this['nodes_read_weight'] = nodesReadWeight;
        return this;
    }
    public set nodesReadWeight(nodesReadWeight: Array<InstancesWeight>  | undefined) {
        this['nodes_read_weight'] = nodesReadWeight;
    }
    public get nodesReadWeight(): Array<InstancesWeight> | undefined {
        return this['nodes_read_weight'];
    }
    public withSubnetId(subnetId: string): CreateMysqlMultiProxyRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}