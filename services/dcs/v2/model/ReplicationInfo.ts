

export class ReplicationInfo {
    private 'replication_id'?: string;
    private 'node_id'?: string;
    private 'replication_ip'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'available_zone'?: string;
    public constructor() { 
    }
    public withReplicationId(replicationId: string): ReplicationInfo {
        this['replication_id'] = replicationId;
        return this;
    }
    public set replicationId(replicationId: string  | undefined) {
        this['replication_id'] = replicationId;
    }
    public get replicationId(): string | undefined {
        return this['replication_id'];
    }
    public withNodeId(nodeId: string): ReplicationInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withReplicationIp(replicationIp: string): ReplicationInfo {
        this['replication_ip'] = replicationIp;
        return this;
    }
    public set replicationIp(replicationIp: string  | undefined) {
        this['replication_ip'] = replicationIp;
    }
    public get replicationIp(): string | undefined {
        return this['replication_ip'];
    }
    public withGroupId(groupId: string): ReplicationInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ReplicationInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withAvailableZone(availableZone: string): ReplicationInfo {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
}