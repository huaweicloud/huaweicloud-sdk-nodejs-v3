import { UpdatePoolSessionPersistenceOption } from './UpdatePoolSessionPersistenceOption';
import { UpdatePoolSlowStartOption } from './UpdatePoolSlowStartOption';


export class UpdatePoolOption {
    private 'admin_state_up'?: boolean | undefined;
    public description?: string;
    private 'lb_algorithm'?: string | undefined;
    public name?: string;
    private 'session_persistence'?: UpdatePoolSessionPersistenceOption | undefined;
    private 'slow_start'?: UpdatePoolSlowStartOption | undefined;
    private 'member_deletion_protection_enable'?: boolean | undefined;
    private 'vpc_id'?: string | undefined;
    public type?: string;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdatePoolOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
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
    public set lbAlgorithm(lbAlgorithm: string | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
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
    public set sessionPersistence(sessionPersistence: UpdatePoolSessionPersistenceOption | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence() {
        return this['session_persistence'];
    }
    public withSlowStart(slowStart: UpdatePoolSlowStartOption): UpdatePoolOption {
        this['slow_start'] = slowStart;
        return this;
    }
    public set slowStart(slowStart: UpdatePoolSlowStartOption | undefined) {
        this['slow_start'] = slowStart;
    }
    public get slowStart() {
        return this['slow_start'];
    }
    public withMemberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean): UpdatePoolOption {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
        return this;
    }
    public set memberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean | undefined) {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
    }
    public get memberDeletionProtectionEnable() {
        return this['member_deletion_protection_enable'];
    }
    public withVpcId(vpcId: string): UpdatePoolOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withType(type: string): UpdatePoolOption {
        this['type'] = type;
        return this;
    }
}