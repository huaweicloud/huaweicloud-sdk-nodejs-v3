import { ConnectionDrain } from './ConnectionDrain';
import { ListenerRef } from './ListenerRef';
import { LoadBalancerRef } from './LoadBalancerRef';
import { MasterSlaveHealthMonitor } from './MasterSlaveHealthMonitor';
import { MasterSlaveMember } from './MasterSlaveMember';
import { QuicCidHashStrategy } from './QuicCidHashStrategy';
import { SessionPersistence } from './SessionPersistence';


export class MasterSlavePool {
    public description?: string;
    public id?: string;
    private 'lb_algorithm'?: string;
    public listeners?: Array<ListenerRef>;
    public loadbalancers?: Array<LoadBalancerRef>;
    public members?: Array<MasterSlaveMember>;
    public name?: string;
    private 'project_id'?: string;
    public protocol?: string;
    private 'session_persistence'?: SessionPersistence;
    private 'ip_version'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'vpc_id'?: string;
    public type?: string;
    private 'enterprise_project_id'?: string;
    public healthmonitor?: MasterSlaveHealthMonitor;
    private 'any_port_enable'?: boolean;
    private 'connection_drain'?: ConnectionDrain;
    private 'quic_cid_hash_strategy'?: QuicCidHashStrategy;
    public constructor(description?: string, id?: string, lbAlgorithm?: string, listeners?: Array<ListenerRef>, loadbalancers?: Array<LoadBalancerRef>, members?: Array<MasterSlaveMember>, name?: string, projectId?: string, protocol?: string, sessionPersistence?: SessionPersistence, ipVersion?: string, createdAt?: string, updatedAt?: string, vpcId?: string, type?: string, enterpriseProjectId?: string, healthmonitor?: MasterSlaveHealthMonitor) { 
        this['description'] = description;
        this['id'] = id;
        this['lb_algorithm'] = lbAlgorithm;
        this['listeners'] = listeners;
        this['loadbalancers'] = loadbalancers;
        this['members'] = members;
        this['name'] = name;
        this['project_id'] = projectId;
        this['protocol'] = protocol;
        this['session_persistence'] = sessionPersistence;
        this['ip_version'] = ipVersion;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['vpc_id'] = vpcId;
        this['type'] = type;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['healthmonitor'] = healthmonitor;
    }
    public withDescription(description: string): MasterSlavePool {
        this['description'] = description;
        return this;
    }
    public withId(id: string): MasterSlavePool {
        this['id'] = id;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): MasterSlavePool {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withListeners(listeners: Array<ListenerRef>): MasterSlavePool {
        this['listeners'] = listeners;
        return this;
    }
    public withLoadbalancers(loadbalancers: Array<LoadBalancerRef>): MasterSlavePool {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withMembers(members: Array<MasterSlaveMember>): MasterSlavePool {
        this['members'] = members;
        return this;
    }
    public withName(name: string): MasterSlavePool {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): MasterSlavePool {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocol(protocol: string): MasterSlavePool {
        this['protocol'] = protocol;
        return this;
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): MasterSlavePool {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: SessionPersistence  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): SessionPersistence | undefined {
        return this['session_persistence'];
    }
    public withIpVersion(ipVersion: string): MasterSlavePool {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): string | undefined {
        return this['ip_version'];
    }
    public withCreatedAt(createdAt: string): MasterSlavePool {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MasterSlavePool {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVpcId(vpcId: string): MasterSlavePool {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withType(type: string): MasterSlavePool {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MasterSlavePool {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHealthmonitor(healthmonitor: MasterSlaveHealthMonitor): MasterSlavePool {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
    public withAnyPortEnable(anyPortEnable: boolean): MasterSlavePool {
        this['any_port_enable'] = anyPortEnable;
        return this;
    }
    public set anyPortEnable(anyPortEnable: boolean  | undefined) {
        this['any_port_enable'] = anyPortEnable;
    }
    public get anyPortEnable(): boolean | undefined {
        return this['any_port_enable'];
    }
    public withConnectionDrain(connectionDrain: ConnectionDrain): MasterSlavePool {
        this['connection_drain'] = connectionDrain;
        return this;
    }
    public set connectionDrain(connectionDrain: ConnectionDrain  | undefined) {
        this['connection_drain'] = connectionDrain;
    }
    public get connectionDrain(): ConnectionDrain | undefined {
        return this['connection_drain'];
    }
    public withQuicCidHashStrategy(quicCidHashStrategy: QuicCidHashStrategy): MasterSlavePool {
        this['quic_cid_hash_strategy'] = quicCidHashStrategy;
        return this;
    }
    public set quicCidHashStrategy(quicCidHashStrategy: QuicCidHashStrategy  | undefined) {
        this['quic_cid_hash_strategy'] = quicCidHashStrategy;
    }
    public get quicCidHashStrategy(): QuicCidHashStrategy | undefined {
        return this['quic_cid_hash_strategy'];
    }
}