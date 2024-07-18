import { ConnectionDrain } from './ConnectionDrain';
import { PoolHealth } from './PoolHealth';
import { UpdatePoolSessionPersistenceOption } from './UpdatePoolSessionPersistenceOption';
import { UpdatePoolSlowStartOption } from './UpdatePoolSlowStartOption';


export class UpdatePoolOption {
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'lb_algorithm'?: string;
    public name?: string;
    private 'session_persistence'?: UpdatePoolSessionPersistenceOption;
    private 'slow_start'?: UpdatePoolSlowStartOption;
    private 'member_deletion_protection_enable'?: boolean;
    private 'vpc_id'?: string;
    public type?: string;
    private 'protection_status'?: UpdatePoolOptionProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    private 'any_port_enable'?: boolean;
    private 'connection_drain'?: ConnectionDrain;
    private 'pool_health'?: PoolHealth;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdatePoolOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDescription(description: string): UpdatePoolOption {
        this['description'] = description;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): UpdatePoolOption {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withName(name: string): UpdatePoolOption {
        this['name'] = name;
        return this;
    }
    public withSessionPersistence(sessionPersistence: UpdatePoolSessionPersistenceOption): UpdatePoolOption {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: UpdatePoolSessionPersistenceOption  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): UpdatePoolSessionPersistenceOption | undefined {
        return this['session_persistence'];
    }
    public withSlowStart(slowStart: UpdatePoolSlowStartOption): UpdatePoolOption {
        this['slow_start'] = slowStart;
        return this;
    }
    public set slowStart(slowStart: UpdatePoolSlowStartOption  | undefined) {
        this['slow_start'] = slowStart;
    }
    public get slowStart(): UpdatePoolSlowStartOption | undefined {
        return this['slow_start'];
    }
    public withMemberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean): UpdatePoolOption {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
        return this;
    }
    public set memberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean  | undefined) {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
    }
    public get memberDeletionProtectionEnable(): boolean | undefined {
        return this['member_deletion_protection_enable'];
    }
    public withVpcId(vpcId: string): UpdatePoolOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withType(type: string): UpdatePoolOption {
        this['type'] = type;
        return this;
    }
    public withProtectionStatus(protectionStatus: UpdatePoolOptionProtectionStatusEnum | string): UpdatePoolOption {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: UpdatePoolOptionProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): UpdatePoolOptionProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): UpdatePoolOption {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
    public withAnyPortEnable(anyPortEnable: boolean): UpdatePoolOption {
        this['any_port_enable'] = anyPortEnable;
        return this;
    }
    public set anyPortEnable(anyPortEnable: boolean  | undefined) {
        this['any_port_enable'] = anyPortEnable;
    }
    public get anyPortEnable(): boolean | undefined {
        return this['any_port_enable'];
    }
    public withConnectionDrain(connectionDrain: ConnectionDrain): UpdatePoolOption {
        this['connection_drain'] = connectionDrain;
        return this;
    }
    public set connectionDrain(connectionDrain: ConnectionDrain  | undefined) {
        this['connection_drain'] = connectionDrain;
    }
    public get connectionDrain(): ConnectionDrain | undefined {
        return this['connection_drain'];
    }
    public withPoolHealth(poolHealth: PoolHealth): UpdatePoolOption {
        this['pool_health'] = poolHealth;
        return this;
    }
    public set poolHealth(poolHealth: PoolHealth  | undefined) {
        this['pool_health'] = poolHealth;
    }
    public get poolHealth(): PoolHealth | undefined {
        return this['pool_health'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePoolOptionProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
