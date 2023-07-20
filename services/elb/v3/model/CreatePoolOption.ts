import { CreatePoolSessionPersistenceOption } from './CreatePoolSessionPersistenceOption';
import { CreatePoolSlowStartOption } from './CreatePoolSlowStartOption';


export class CreatePoolOption {
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'lb_algorithm'?: string;
    private 'listener_id'?: string;
    private 'loadbalancer_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    public protocol?: string;
    private 'session_persistence'?: CreatePoolSessionPersistenceOption;
    private 'slow_start'?: CreatePoolSlowStartOption;
    private 'member_deletion_protection_enable'?: boolean;
    private 'vpc_id'?: string;
    public type?: string;
    private 'protection_status'?: CreatePoolOptionProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    private 'any_port_enable'?: boolean;
    public constructor(lbAlgorithm?: string, protocol?: string) { 
        this['lb_algorithm'] = lbAlgorithm;
        this['protocol'] = protocol;
    }
    public withAdminStateUp(adminStateUp: boolean): CreatePoolOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
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
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withListenerId(listenerId: string): CreatePoolOption {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreatePoolOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
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
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
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
    public set sessionPersistence(sessionPersistence: CreatePoolSessionPersistenceOption  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): CreatePoolSessionPersistenceOption | undefined {
        return this['session_persistence'];
    }
    public withSlowStart(slowStart: CreatePoolSlowStartOption): CreatePoolOption {
        this['slow_start'] = slowStart;
        return this;
    }
    public set slowStart(slowStart: CreatePoolSlowStartOption  | undefined) {
        this['slow_start'] = slowStart;
    }
    public get slowStart(): CreatePoolSlowStartOption | undefined {
        return this['slow_start'];
    }
    public withMemberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean): CreatePoolOption {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
        return this;
    }
    public set memberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean  | undefined) {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
    }
    public get memberDeletionProtectionEnable(): boolean | undefined {
        return this['member_deletion_protection_enable'];
    }
    public withVpcId(vpcId: string): CreatePoolOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withType(type: string): CreatePoolOption {
        this['type'] = type;
        return this;
    }
    public withProtectionStatus(protectionStatus: CreatePoolOptionProtectionStatusEnum | string): CreatePoolOption {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: CreatePoolOptionProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): CreatePoolOptionProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): CreatePoolOption {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
    public withAnyPortEnable(anyPortEnable: boolean): CreatePoolOption {
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

/**
    * @export
    * @enum {string}
    */
export enum CreatePoolOptionProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
