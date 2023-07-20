import { InstanceReplicationDimensionsInfo } from './InstanceReplicationDimensionsInfo';


export class NodesInfoResp {
    private 'logical_node_id'?: string;
    public name?: string;
    public status?: NodesInfoRespStatusEnum | string;
    private 'az_code'?: string;
    private 'node_role'?: NodesInfoRespNodeRoleEnum | string;
    private 'node_type'?: NodesInfoRespNodeTypeEnum | string;
    private 'node_ip'?: string;
    private 'node_port'?: string;
    private 'node_id'?: string;
    private 'priority_weight'?: number;
    private 'is_access'?: boolean;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'is_remove_ip'?: boolean;
    private 'replication_id'?: string;
    public dimensions?: Array<InstanceReplicationDimensionsInfo>;
    public constructor() { 
    }
    public withLogicalNodeId(logicalNodeId: string): NodesInfoResp {
        this['logical_node_id'] = logicalNodeId;
        return this;
    }
    public set logicalNodeId(logicalNodeId: string  | undefined) {
        this['logical_node_id'] = logicalNodeId;
    }
    public get logicalNodeId(): string | undefined {
        return this['logical_node_id'];
    }
    public withName(name: string): NodesInfoResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: NodesInfoRespStatusEnum | string): NodesInfoResp {
        this['status'] = status;
        return this;
    }
    public withAzCode(azCode: string): NodesInfoResp {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withNodeRole(nodeRole: NodesInfoRespNodeRoleEnum | string): NodesInfoResp {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: NodesInfoRespNodeRoleEnum | string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): NodesInfoRespNodeRoleEnum | string | undefined {
        return this['node_role'];
    }
    public withNodeType(nodeType: NodesInfoRespNodeTypeEnum | string): NodesInfoResp {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: NodesInfoRespNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): NodesInfoRespNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
    public withNodeIp(nodeIp: string): NodesInfoResp {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string  | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp(): string | undefined {
        return this['node_ip'];
    }
    public withNodePort(nodePort: string): NodesInfoResp {
        this['node_port'] = nodePort;
        return this;
    }
    public set nodePort(nodePort: string  | undefined) {
        this['node_port'] = nodePort;
    }
    public get nodePort(): string | undefined {
        return this['node_port'];
    }
    public withNodeId(nodeId: string): NodesInfoResp {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withPriorityWeight(priorityWeight: number): NodesInfoResp {
        this['priority_weight'] = priorityWeight;
        return this;
    }
    public set priorityWeight(priorityWeight: number  | undefined) {
        this['priority_weight'] = priorityWeight;
    }
    public get priorityWeight(): number | undefined {
        return this['priority_weight'];
    }
    public withIsAccess(isAccess: boolean): NodesInfoResp {
        this['is_access'] = isAccess;
        return this;
    }
    public set isAccess(isAccess: boolean  | undefined) {
        this['is_access'] = isAccess;
    }
    public get isAccess(): boolean | undefined {
        return this['is_access'];
    }
    public withGroupId(groupId: string): NodesInfoResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): NodesInfoResp {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withIsRemoveIp(isRemoveIp: boolean): NodesInfoResp {
        this['is_remove_ip'] = isRemoveIp;
        return this;
    }
    public set isRemoveIp(isRemoveIp: boolean  | undefined) {
        this['is_remove_ip'] = isRemoveIp;
    }
    public get isRemoveIp(): boolean | undefined {
        return this['is_remove_ip'];
    }
    public withReplicationId(replicationId: string): NodesInfoResp {
        this['replication_id'] = replicationId;
        return this;
    }
    public set replicationId(replicationId: string  | undefined) {
        this['replication_id'] = replicationId;
    }
    public get replicationId(): string | undefined {
        return this['replication_id'];
    }
    public withDimensions(dimensions: Array<InstanceReplicationDimensionsInfo>): NodesInfoResp {
        this['dimensions'] = dimensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodesInfoRespStatusEnum {
    CREATING = 'Creating',
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    DELETING = 'Deleting',
    ADDSHARDING = 'AddSharding'
}
/**
    * @export
    * @enum {string}
    */
export enum NodesInfoRespNodeRoleEnum {
    REDIS_SERVER = 'redis-server',
    REDIS_PROXY = 'redis-proxy'
}
/**
    * @export
    * @enum {string}
    */
export enum NodesInfoRespNodeTypeEnum {
    MASTER = 'master',
    SLAVE = 'slave',
    PROXY = 'proxy'
}
