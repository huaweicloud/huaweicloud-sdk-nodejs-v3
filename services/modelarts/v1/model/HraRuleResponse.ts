import { Metrics } from './Metrics';
import { RoleReplica } from './RoleReplica';
import { SloInfo } from './SloInfo';


export class HraRuleResponse {
    public id?: string;
    public name?: string;
    public disable?: boolean;
    private 'scaler_type'?: string;
    private 'rule_status'?: string;
    private 'slo_info'?: Array<SloInfo>;
    public metrics?: Array<Metrics>;
    private 'role_replica'?: Array<RoleReplica>;
    public constructor() { 
    }
    public withId(id: string): HraRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HraRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDisable(disable: boolean): HraRuleResponse {
        this['disable'] = disable;
        return this;
    }
    public withScalerType(scalerType: string): HraRuleResponse {
        this['scaler_type'] = scalerType;
        return this;
    }
    public set scalerType(scalerType: string  | undefined) {
        this['scaler_type'] = scalerType;
    }
    public get scalerType(): string | undefined {
        return this['scaler_type'];
    }
    public withRuleStatus(ruleStatus: string): HraRuleResponse {
        this['rule_status'] = ruleStatus;
        return this;
    }
    public set ruleStatus(ruleStatus: string  | undefined) {
        this['rule_status'] = ruleStatus;
    }
    public get ruleStatus(): string | undefined {
        return this['rule_status'];
    }
    public withSloInfo(sloInfo: Array<SloInfo>): HraRuleResponse {
        this['slo_info'] = sloInfo;
        return this;
    }
    public set sloInfo(sloInfo: Array<SloInfo>  | undefined) {
        this['slo_info'] = sloInfo;
    }
    public get sloInfo(): Array<SloInfo> | undefined {
        return this['slo_info'];
    }
    public withMetrics(metrics: Array<Metrics>): HraRuleResponse {
        this['metrics'] = metrics;
        return this;
    }
    public withRoleReplica(roleReplica: Array<RoleReplica>): HraRuleResponse {
        this['role_replica'] = roleReplica;
        return this;
    }
    public set roleReplica(roleReplica: Array<RoleReplica>  | undefined) {
        this['role_replica'] = roleReplica;
    }
    public get roleReplica(): Array<RoleReplica> | undefined {
        return this['role_replica'];
    }
}