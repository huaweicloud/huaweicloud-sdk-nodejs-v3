import { NodesWeight } from './NodesWeight';


export class OpenMysqlProxyRequestBody {
    private 'flavor_ref'?: string;
    private 'node_num'?: number;
    private 'proxy_name'?: string;
    private 'proxy_mode'?: OpenMysqlProxyRequestBodyProxyModeEnum | string;
    private 'route_mode'?: number;
    private 'nodes_read_weight'?: Array<NodesWeight>;
    private 'subnet_id'?: string;
    private 'new_node_auto_add_status'?: string;
    private 'new_node_weight'?: number;
    public constructor(flavorRef?: string, nodeNum?: number) { 
        this['flavor_ref'] = flavorRef;
        this['node_num'] = nodeNum;
    }
    public withFlavorRef(flavorRef: string): OpenMysqlProxyRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withNodeNum(nodeNum: number): OpenMysqlProxyRequestBody {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withProxyName(proxyName: string): OpenMysqlProxyRequestBody {
        this['proxy_name'] = proxyName;
        return this;
    }
    public set proxyName(proxyName: string  | undefined) {
        this['proxy_name'] = proxyName;
    }
    public get proxyName(): string | undefined {
        return this['proxy_name'];
    }
    public withProxyMode(proxyMode: OpenMysqlProxyRequestBodyProxyModeEnum | string): OpenMysqlProxyRequestBody {
        this['proxy_mode'] = proxyMode;
        return this;
    }
    public set proxyMode(proxyMode: OpenMysqlProxyRequestBodyProxyModeEnum | string  | undefined) {
        this['proxy_mode'] = proxyMode;
    }
    public get proxyMode(): OpenMysqlProxyRequestBodyProxyModeEnum | string | undefined {
        return this['proxy_mode'];
    }
    public withRouteMode(routeMode: number): OpenMysqlProxyRequestBody {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: number  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): number | undefined {
        return this['route_mode'];
    }
    public withNodesReadWeight(nodesReadWeight: Array<NodesWeight>): OpenMysqlProxyRequestBody {
        this['nodes_read_weight'] = nodesReadWeight;
        return this;
    }
    public set nodesReadWeight(nodesReadWeight: Array<NodesWeight>  | undefined) {
        this['nodes_read_weight'] = nodesReadWeight;
    }
    public get nodesReadWeight(): Array<NodesWeight> | undefined {
        return this['nodes_read_weight'];
    }
    public withSubnetId(subnetId: string): OpenMysqlProxyRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withNewNodeAutoAddStatus(newNodeAutoAddStatus: string): OpenMysqlProxyRequestBody {
        this['new_node_auto_add_status'] = newNodeAutoAddStatus;
        return this;
    }
    public set newNodeAutoAddStatus(newNodeAutoAddStatus: string  | undefined) {
        this['new_node_auto_add_status'] = newNodeAutoAddStatus;
    }
    public get newNodeAutoAddStatus(): string | undefined {
        return this['new_node_auto_add_status'];
    }
    public withNewNodeWeight(newNodeWeight: number): OpenMysqlProxyRequestBody {
        this['new_node_weight'] = newNodeWeight;
        return this;
    }
    public set newNodeWeight(newNodeWeight: number  | undefined) {
        this['new_node_weight'] = newNodeWeight;
    }
    public get newNodeWeight(): number | undefined {
        return this['new_node_weight'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenMysqlProxyRequestBodyProxyModeEnum {
    READWRITE = 'readwrite',
    READONLY = 'readonly'
}
