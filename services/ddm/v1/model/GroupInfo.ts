import { GroupNodeInfo } from './GroupNodeInfo';


export class GroupInfo {
    public id?: string;
    public name?: string;
    public role?: GroupInfoRoleEnum | string;
    public endpoint?: string;
    private 'ipv6_endpoint'?: string;
    private 'is_load_balance'?: boolean;
    private 'is_default_group'?: boolean;
    private 'cpu_num_per_node'?: number;
    private 'mem_num_per_node'?: number;
    public architecture?: GroupInfoArchitectureEnum | string;
    private 'node_list'?: Array<GroupNodeInfo>;
    public constructor(id?: string, name?: string, role?: string, endpoint?: string, isLoadBalance?: boolean, isDefaultGroup?: boolean, cpuNumPerNode?: number, memNumPerNode?: number, architecture?: string, nodeList?: Array<GroupNodeInfo>) { 
        this['id'] = id;
        this['name'] = name;
        this['role'] = role;
        this['endpoint'] = endpoint;
        this['is_load_balance'] = isLoadBalance;
        this['is_default_group'] = isDefaultGroup;
        this['cpu_num_per_node'] = cpuNumPerNode;
        this['mem_num_per_node'] = memNumPerNode;
        this['architecture'] = architecture;
        this['node_list'] = nodeList;
    }
    public withId(id: string): GroupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupInfo {
        this['name'] = name;
        return this;
    }
    public withRole(role: GroupInfoRoleEnum | string): GroupInfo {
        this['role'] = role;
        return this;
    }
    public withEndpoint(endpoint: string): GroupInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withIpv6Endpoint(ipv6Endpoint: string): GroupInfo {
        this['ipv6_endpoint'] = ipv6Endpoint;
        return this;
    }
    public set ipv6Endpoint(ipv6Endpoint: string  | undefined) {
        this['ipv6_endpoint'] = ipv6Endpoint;
    }
    public get ipv6Endpoint(): string | undefined {
        return this['ipv6_endpoint'];
    }
    public withIsLoadBalance(isLoadBalance: boolean): GroupInfo {
        this['is_load_balance'] = isLoadBalance;
        return this;
    }
    public set isLoadBalance(isLoadBalance: boolean  | undefined) {
        this['is_load_balance'] = isLoadBalance;
    }
    public get isLoadBalance(): boolean | undefined {
        return this['is_load_balance'];
    }
    public withIsDefaultGroup(isDefaultGroup: boolean): GroupInfo {
        this['is_default_group'] = isDefaultGroup;
        return this;
    }
    public set isDefaultGroup(isDefaultGroup: boolean  | undefined) {
        this['is_default_group'] = isDefaultGroup;
    }
    public get isDefaultGroup(): boolean | undefined {
        return this['is_default_group'];
    }
    public withCpuNumPerNode(cpuNumPerNode: number): GroupInfo {
        this['cpu_num_per_node'] = cpuNumPerNode;
        return this;
    }
    public set cpuNumPerNode(cpuNumPerNode: number  | undefined) {
        this['cpu_num_per_node'] = cpuNumPerNode;
    }
    public get cpuNumPerNode(): number | undefined {
        return this['cpu_num_per_node'];
    }
    public withMemNumPerNode(memNumPerNode: number): GroupInfo {
        this['mem_num_per_node'] = memNumPerNode;
        return this;
    }
    public set memNumPerNode(memNumPerNode: number  | undefined) {
        this['mem_num_per_node'] = memNumPerNode;
    }
    public get memNumPerNode(): number | undefined {
        return this['mem_num_per_node'];
    }
    public withArchitecture(architecture: GroupInfoArchitectureEnum | string): GroupInfo {
        this['architecture'] = architecture;
        return this;
    }
    public withNodeList(nodeList: Array<GroupNodeInfo>): GroupInfo {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<GroupNodeInfo>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<GroupNodeInfo> | undefined {
        return this['node_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GroupInfoRoleEnum {
    RW = 'rw',
    R = 'r'
}
/**
    * @export
    * @enum {string}
    */
export enum GroupInfoArchitectureEnum {
    X86 = 'X86',
    ARM = 'ARM'
}
