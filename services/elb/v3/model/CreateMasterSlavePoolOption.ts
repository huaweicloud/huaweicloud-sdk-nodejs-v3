import { CreateMasterSlaveHealthMonitorOption } from './CreateMasterSlaveHealthMonitorOption';
import { CreateMasterSlaveMemberOption } from './CreateMasterSlaveMemberOption';
import { CreatePoolSessionPersistenceOption } from './CreatePoolSessionPersistenceOption';


export class CreateMasterSlavePoolOption {
    public description?: string;
    private 'lb_algorithm': string | undefined;
    private 'loadbalancer_id'?: string | undefined;
    private 'listener_id'?: string | undefined;
    public name?: string;
    private 'project_id'?: string | undefined;
    public protocol: string;
    private 'session_persistence'?: CreatePoolSessionPersistenceOption | undefined;
    private 'vpc_id'?: string | undefined;
    public type: string;
    public members: Array<CreateMasterSlaveMemberOption>;
    public healthmonitor: CreateMasterSlaveHealthMonitorOption;
    public constructor(lbAlgorithm?: any, protocol?: any, type?: any, members?: any, healthmonitor?: any) { 
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
    public set lbAlgorithm(lbAlgorithm: string | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreateMasterSlavePoolOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withListenerId(listenerId: string): CreateMasterSlavePoolOption {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
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
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
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
    public set sessionPersistence(sessionPersistence: CreatePoolSessionPersistenceOption | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence() {
        return this['session_persistence'];
    }
    public withVpcId(vpcId: string): CreateMasterSlavePoolOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withType(type: string): CreateMasterSlavePoolOption {
        this['type'] = type;
        return this;
    }
    public withMembers(members: Array<CreateMasterSlaveMemberOption>): CreateMasterSlavePoolOption {
        this['members'] = members;
        return this;
    }
    public withHealthmonitor(healthmonitor: CreateMasterSlaveHealthMonitorOption): CreateMasterSlavePoolOption {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}