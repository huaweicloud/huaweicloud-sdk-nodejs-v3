
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogicalClusterPlanResponse extends SdkResponse {
    private 'plan_id'?: string;
    public constructor() { 
        super();
    }
    public withPlanId(planId: string): CreateLogicalClusterPlanResponse {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
}