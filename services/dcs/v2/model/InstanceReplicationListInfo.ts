import { InstanceReplicationDimensionsInfo } from './InstanceReplicationDimensionsInfo';


export class InstanceReplicationListInfo {
    private 'replication_role'?: string | undefined;
    private 'replication_ip'?: string | undefined;
    private 'is_replication'?: boolean | undefined;
    private 'replication_id'?: string | undefined;
    private 'node_id'?: string | undefined;
    public status?: InstanceReplicationListInfoStatusEnum;
    private 'az_code'?: string | undefined;
    public dimensions?: Array<InstanceReplicationDimensionsInfo>;
    public constructor() { 
    }
    public withReplicationRole(replicationRole: string): InstanceReplicationListInfo {
        this['replication_role'] = replicationRole;
        return this;
    }
    public set replicationRole(replicationRole: string | undefined) {
        this['replication_role'] = replicationRole;
    }
    public get replicationRole() {
        return this['replication_role'];
    }
    public withReplicationIp(replicationIp: string): InstanceReplicationListInfo {
        this['replication_ip'] = replicationIp;
        return this;
    }
    public set replicationIp(replicationIp: string | undefined) {
        this['replication_ip'] = replicationIp;
    }
    public get replicationIp() {
        return this['replication_ip'];
    }
    public withIsReplication(isReplication: boolean): InstanceReplicationListInfo {
        this['is_replication'] = isReplication;
        return this;
    }
    public set isReplication(isReplication: boolean | undefined) {
        this['is_replication'] = isReplication;
    }
    public get isReplication() {
        return this['is_replication'];
    }
    public withReplicationId(replicationId: string): InstanceReplicationListInfo {
        this['replication_id'] = replicationId;
        return this;
    }
    public set replicationId(replicationId: string | undefined) {
        this['replication_id'] = replicationId;
    }
    public get replicationId() {
        return this['replication_id'];
    }
    public withNodeId(nodeId: string): InstanceReplicationListInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withStatus(status: InstanceReplicationListInfoStatusEnum): InstanceReplicationListInfo {
        this['status'] = status;
        return this;
    }
    public withAzCode(azCode: string): InstanceReplicationListInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode() {
        return this['az_code'];
    }
    public withDimensions(dimensions: Array<InstanceReplicationDimensionsInfo>): InstanceReplicationListInfo {
        this['dimensions'] = dimensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceReplicationListInfoStatusEnum {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
}
