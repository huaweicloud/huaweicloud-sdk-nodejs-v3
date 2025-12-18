import { DdmNodeInfo } from './DdmNodeInfo';


export class DdmGroupInfo {
    public id?: string;
    public name?: string;
    public role?: string;
    public endpoint?: string;
    private 'ipv6_endpoint'?: string;
    private 'node_count'?: number;
    private 'load_balance'?: boolean;
    private 'is_default_group'?: boolean;
    private 'extend_map'?: { [key: string]: string; };
    public nodes?: Array<DdmNodeInfo>;
    public constructor() { 
    }
    public withId(id: string): DdmGroupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DdmGroupInfo {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): DdmGroupInfo {
        this['role'] = role;
        return this;
    }
    public withEndpoint(endpoint: string): DdmGroupInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withIpv6Endpoint(ipv6Endpoint: string): DdmGroupInfo {
        this['ipv6_endpoint'] = ipv6Endpoint;
        return this;
    }
    public set ipv6Endpoint(ipv6Endpoint: string  | undefined) {
        this['ipv6_endpoint'] = ipv6Endpoint;
    }
    public get ipv6Endpoint(): string | undefined {
        return this['ipv6_endpoint'];
    }
    public withNodeCount(nodeCount: number): DdmGroupInfo {
        this['node_count'] = nodeCount;
        return this;
    }
    public set nodeCount(nodeCount: number  | undefined) {
        this['node_count'] = nodeCount;
    }
    public get nodeCount(): number | undefined {
        return this['node_count'];
    }
    public withLoadBalance(loadBalance: boolean): DdmGroupInfo {
        this['load_balance'] = loadBalance;
        return this;
    }
    public set loadBalance(loadBalance: boolean  | undefined) {
        this['load_balance'] = loadBalance;
    }
    public get loadBalance(): boolean | undefined {
        return this['load_balance'];
    }
    public withIsDefaultGroup(isDefaultGroup: boolean): DdmGroupInfo {
        this['is_default_group'] = isDefaultGroup;
        return this;
    }
    public set isDefaultGroup(isDefaultGroup: boolean  | undefined) {
        this['is_default_group'] = isDefaultGroup;
    }
    public get isDefaultGroup(): boolean | undefined {
        return this['is_default_group'];
    }
    public withExtendMap(extendMap: { [key: string]: string; }): DdmGroupInfo {
        this['extend_map'] = extendMap;
        return this;
    }
    public set extendMap(extendMap: { [key: string]: string; }  | undefined) {
        this['extend_map'] = extendMap;
    }
    public get extendMap(): { [key: string]: string; } | undefined {
        return this['extend_map'];
    }
    public withNodes(nodes: Array<DdmNodeInfo>): DdmGroupInfo {
        this['nodes'] = nodes;
        return this;
    }
}