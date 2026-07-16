import { Metrics } from './Metrics';
import { RoleReplica } from './RoleReplica';
import { SloInfo } from './SloInfo';


export class HraRuleCreateRequest {
    private 'scaler_type'?: string;
    private 'slo_info'?: Array<SloInfo>;
    public metrics?: Array<Metrics>;
    private 'role_replica'?: Array<RoleReplica>;
    public constructor(sloInfo?: Array<SloInfo>, metrics?: Array<Metrics>) { 
        this['slo_info'] = sloInfo;
        this['metrics'] = metrics;
    }
    public withScalerType(scalerType: string): HraRuleCreateRequest {
        this['scaler_type'] = scalerType;
        return this;
    }
    public set scalerType(scalerType: string  | undefined) {
        this['scaler_type'] = scalerType;
    }
    public get scalerType(): string | undefined {
        return this['scaler_type'];
    }
    public withSloInfo(sloInfo: Array<SloInfo>): HraRuleCreateRequest {
        this['slo_info'] = sloInfo;
        return this;
    }
    public set sloInfo(sloInfo: Array<SloInfo>  | undefined) {
        this['slo_info'] = sloInfo;
    }
    public get sloInfo(): Array<SloInfo> | undefined {
        return this['slo_info'];
    }
    public withMetrics(metrics: Array<Metrics>): HraRuleCreateRequest {
        this['metrics'] = metrics;
        return this;
    }
    public withRoleReplica(roleReplica: Array<RoleReplica>): HraRuleCreateRequest {
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