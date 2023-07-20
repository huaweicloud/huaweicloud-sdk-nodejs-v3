import { ClusterScalingParams } from './ClusterScalingParams';


export class ClusterScalingReq {
    private 'service_id'?: string;
    private 'plan_id'?: string;
    public parameters?: ClusterScalingParams;
    private 'previous_values'?: { [key: string]: string; };
    public constructor(parameters?: ClusterScalingParams) { 
        this['parameters'] = parameters;
    }
    public withServiceId(serviceId: string): ClusterScalingReq {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withPlanId(planId: string): ClusterScalingReq {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withParameters(parameters: ClusterScalingParams): ClusterScalingReq {
        this['parameters'] = parameters;
        return this;
    }
    public withPreviousValues(previousValues: { [key: string]: string; }): ClusterScalingReq {
        this['previous_values'] = previousValues;
        return this;
    }
    public set previousValues(previousValues: { [key: string]: string; }  | undefined) {
        this['previous_values'] = previousValues;
    }
    public get previousValues(): { [key: string]: string; } | undefined {
        return this['previous_values'];
    }
}