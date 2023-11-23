import { CreateMasterSlaveHealthMonitorOption } from './CreateMasterSlaveHealthMonitorOption';
import { CreateMasterSlaveMemberOption } from './CreateMasterSlaveMemberOption';
import { CreatePoolSessionPersistenceOption } from './CreatePoolSessionPersistenceOption';


export class CreateMasterSlavePoolOption {
    public description?: string;
    private 'lb_algorithm'?: string;
    private 'loadbalancer_id'?: string;
    private 'listener_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    public protocol?: string;
    private 'session_persistence'?: CreatePoolSessionPersistenceOption;
    private 'vpc_id'?: string;
    public type?: string;
    private 'ip_version'?: string;
    public members?: Array<CreateMasterSlaveMemberOption>;
    public healthmonitor?: CreateMasterSlaveHealthMonitorOption;
    private 'any_port_enable'?: boolean;
    public constructor(lbAlgorithm?: string, protocol?: string, type?: string, members?: Array<CreateMasterSlaveMemberOption>, healthmonitor?: CreateMasterSlaveHealthMonitorOption) { 
        this['lb_algorithm'] = lbAlgorithm;
        this['protocol'] = protocol;
        this['type'] = type;
        this['members'] = members;
        this['healthmonitor'] = healthmonitor;
    }
    public withDescription(description: string): CreateMasterSlavePoolOption {
        this['description'] = description;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): CreateMasterSlavePoolOption {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreateMasterSlavePoolOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withListenerId(listenerId: string): CreateMasterSlavePoolOption {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withName(name: string): CreateMasterSlavePoolOption {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): CreateMasterSlavePoolOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocol(protocol: string): CreateMasterSlavePoolOption {
        this['protocol'] = protocol;
        return this;
    }
    public withSessionPersistence(sessionPersistence: CreatePoolSessionPersistenceOption): CreateMasterSlavePoolOption {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: CreatePoolSessionPersistenceOption  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): CreatePoolSessionPersistenceOption | undefined {
        return this['session_persistence'];
    }
    public withVpcId(vpcId: string): CreateMasterSlavePoolOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withType(type: string): CreateMasterSlavePoolOption {
        this['type'] = type;
        return this;
    }
    public withIpVersion(ipVersion: string): CreateMasterSlavePoolOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): string | undefined {
        return this['ip_version'];
    }
    public withMembers(members: Array<CreateMasterSlaveMemberOption>): CreateMasterSlavePoolOption {
        this['members'] = members;
        return this;
    }
    public withHealthmonitor(healthmonitor: CreateMasterSlaveHealthMonitorOption): CreateMasterSlavePoolOption {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
    public withAnyPortEnable(anyPortEnable: boolean): CreateMasterSlavePoolOption {
        this['any_port_enable'] = anyPortEnable;
        return this;
    }
    public set anyPortEnable(anyPortEnable: boolean  | undefined) {
        this['any_port_enable'] = anyPortEnable;
    }
    public get anyPortEnable(): boolean | undefined {
        return this['any_port_enable'];
    }
}