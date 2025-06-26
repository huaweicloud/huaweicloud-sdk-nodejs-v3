import { ScalingPolicy } from './ScalingPolicy';
import { ScalingPolicyBySession } from './ScalingPolicyBySession';


export class CreateOrUpdateScalingPolicyReq {
    public enable?: boolean;
    private 'max_scaling_amount'?: number;
    private 'single_expansion_count'?: number;
    private 'scaling_policy_by_session'?: ScalingPolicyBySession;
    private 'server_group_id'?: string;
    public constructor(maxScalingAmount?: number, singleExpansionCount?: number, scalingPolicyBySession?: ScalingPolicyBySession, serverGroupId?: string) { 
        this['max_scaling_amount'] = maxScalingAmount;
        this['single_expansion_count'] = singleExpansionCount;
        this['scaling_policy_by_session'] = scalingPolicyBySession;
        this['server_group_id'] = serverGroupId;
    }
    public withEnable(enable: boolean): CreateOrUpdateScalingPolicyReq {
        this['enable'] = enable;
        return this;
    }
    public withMaxScalingAmount(maxScalingAmount: number): CreateOrUpdateScalingPolicyReq {
        this['max_scaling_amount'] = maxScalingAmount;
        return this;
    }
    public set maxScalingAmount(maxScalingAmount: number  | undefined) {
        this['max_scaling_amount'] = maxScalingAmount;
    }
    public get maxScalingAmount(): number | undefined {
        return this['max_scaling_amount'];
    }
    public withSingleExpansionCount(singleExpansionCount: number): CreateOrUpdateScalingPolicyReq {
        this['single_expansion_count'] = singleExpansionCount;
        return this;
    }
    public set singleExpansionCount(singleExpansionCount: number  | undefined) {
        this['single_expansion_count'] = singleExpansionCount;
    }
    public get singleExpansionCount(): number | undefined {
        return this['single_expansion_count'];
    }
    public withScalingPolicyBySession(scalingPolicyBySession: ScalingPolicyBySession): CreateOrUpdateScalingPolicyReq {
        this['scaling_policy_by_session'] = scalingPolicyBySession;
        return this;
    }
    public set scalingPolicyBySession(scalingPolicyBySession: ScalingPolicyBySession  | undefined) {
        this['scaling_policy_by_session'] = scalingPolicyBySession;
    }
    public get scalingPolicyBySession(): ScalingPolicyBySession | undefined {
        return this['scaling_policy_by_session'];
    }
    public withServerGroupId(serverGroupId: string): CreateOrUpdateScalingPolicyReq {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
}