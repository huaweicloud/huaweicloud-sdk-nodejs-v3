import { NodesWeight } from './NodesWeight';


export class OpenMysqlProxyRequestBody {
    private 'flavor_ref'?: string;
    private 'node_num'?: number;
    private 'proxy_name'?: string;
    private 'proxy_mode'?: OpenMysqlProxyRequestBodyProxyModeEnum | string;
    private 'nodes_read_weight'?: Array<NodesWeight>;
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
}

/**
    * @export
    * @enum {string}
    */
export enum OpenMysqlProxyRequestBodyProxyModeEnum {
    READWRITE = 'readwrite',
    READONLY = 'readonly'
}
