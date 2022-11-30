import { InstanceReplicationDimensionsInfo } from './InstanceReplicationDimensionsInfo';


export class NodesInfoResp {
    private 'logical_node_id'?: string | undefined;
    public name?: string;
    public status?: NodesInfoRespStatusEnum;
    private 'az_code'?: string | undefined;
    private 'node_role'?: NodesInfoRespNodeRoleEnum | undefined;
    private 'node_type'?: NodesInfoRespNodeTypeEnum | undefined;
    private 'node_ip'?: string | undefined;
    private 'node_port'?: string | undefined;
    private 'node_id'?: string | undefined;
    private 'priority_weight'?: number | undefined;
    private 'is_access'?: boolean | undefined;
    private 'group_id'?: string | undefined;
    private 'group_name'?: string | undefined;
    private 'is_remove_ip'?: boolean | undefined;
    private 'replication_id'?: string | undefined;
    public dimensions?: Array<InstanceReplicationDimensionsInfo>;
    public constructor() { 
    }
    public withLogicalNodeId(logicalNodeId: string): NodesInfoResp {
        this['logical_node_id'] = logicalNodeId;
        return this;
    }
    public set logicalNodeId(logicalNodeId: string | undefined) {
        this['logical_node_id'] = logicalNodeId;
    }
    public get logicalNodeId() {
        return this['logical_node_id'];
    }
    public withName(name: string): NodesInfoResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: NodesInfoRespStatusEnum): NodesInfoResp {
        this['status'] = status;
        return this;
    }
    public withAzCode(azCode: string): NodesInfoResp {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode() {
        return this['az_code'];
    }
    public withNodeRole(nodeRole: NodesInfoRespNodeRoleEnum): NodesInfoResp {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: NodesInfoRespNodeRoleEnum | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole() {
        return this['node_role'];
    }
    public withNodeType(nodeType: NodesInfoRespNodeTypeEnum): NodesInfoResp {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: NodesInfoRespNodeTypeEnum | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withNodeIp(nodeIp: string): NodesInfoResp {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp() {
        return this['node_ip'];
    }
    public withNodePort(nodePort: string): NodesInfoResp {
        this['node_port'] = nodePort;
        return this;
    }
    public set nodePort(nodePort: string | undefined) {
        this['node_port'] = nodePort;
    }
    public get nodePort() {
        return this['node_port'];
    }
    public withNodeId(nodeId: string): NodesInfoResp {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withPriorityWeight(priorityWeight: number): NodesInfoResp {
        this['priority_weight'] = priorityWeight;
        return this;
    }
    public set priorityWeight(priorityWeight: number | undefined) {
        this['priority_weight'] = priorityWeight;
    }
    public get priorityWeight() {
        return this['priority_weight'];
    }
    public withIsAccess(isAccess: boolean): NodesInfoResp {
        this['is_access'] = isAccess;
        return this;
    }
    public set isAccess(isAccess: boolean | undefined) {
        this['is_access'] = isAccess;
    }
    public get isAccess() {
        return this['is_access'];
    }
    public withGroupId(groupId: string): NodesInfoResp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withGroupName(groupName: string): NodesInfoResp {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withIsRemoveIp(isRemoveIp: boolean): NodesInfoResp {
        this['is_remove_ip'] = isRemoveIp;
        return this;
    }
    public set isRemoveIp(isRemoveIp: boolean | undefined) {
        this['is_remove_ip'] = isRemoveIp;
    }
    public get isRemoveIp() {
        return this['is_remove_ip'];
    }
    public withReplicationId(replicationId: string): NodesInfoResp {
        this['replication_id'] = replicationId;
        return this;
    }
    public set replicationId(replicationId: string | undefined) {
        this['replication_id'] = replicationId;
    }
    public get replicationId() {
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
