import { CreatePoolSessionPersistenceOption } from './CreatePoolSessionPersistenceOption';
import { CreatePoolSlowStartOption } from './CreatePoolSlowStartOption';


export class CreatePoolOption {
    private 'admin_state_up'?: boolean | undefined;
    public description?: string;
    private 'lb_algorithm': string | undefined;
    private 'listener_id'?: string | undefined;
    private 'loadbalancer_id'?: string | undefined;
    public name?: string;
    private 'project_id'?: string | undefined;
    public protocol: string;
    private 'session_persistence'?: CreatePoolSessionPersistenceOption | undefined;
    private 'slow_start'?: CreatePoolSlowStartOption | undefined;
    private 'member_deletion_protection_enable'?: boolean | undefined;
    private 'vpc_id'?: string | undefined;
    public type?: string;
    public constructor(lbAlgorithm?: any, protocol?: any) { 
        this['lb_algorithm'] = lbAlgorithm;
        this['protocol'] = protocol;
    }
    public withAdminStateUp(adminStateUp: boolean): CreatePoolOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDescription(description: string): CreatePoolOption {
        this['description'] = description;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): CreatePoolOption {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withListenerId(listenerId: string): CreatePoolOption {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreatePoolOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withName(name: string): CreatePoolOption {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): CreatePoolOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProtocol(protocol: string): CreatePoolOption {
        this['protocol'] = protocol;
        return this;
    }
    public withSessionPersistence(sessionPersistence: CreatePoolSessionPersistenceOption): CreatePoolOption {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: CreatePoolSessionPersistenceOption | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence() {
        return this['session_persistence'];
    }
    public withSlowStart(slowStart: CreatePoolSlowStartOption): CreatePoolOption {
        this['slow_start'] = slowStart;
        return this;
    }
    public set slowStart(slowStart: CreatePoolSlowStartOption | undefined) {
        this['slow_start'] = slowStart;
    }
    public get slowStart() {
        return this['slow_start'];
    }
    public withMemberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean): CreatePoolOption {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
        return this;
    }
    public set memberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean | undefined) {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
    }
    public get memberDeletionProtectionEnable() {
        return this['member_deletion_protection_enable'];
    }
    public withVpcId(vpcId: string): CreatePoolOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withType(type: string): CreatePoolOption {
        this['type'] = type;
        return this;
    }
}