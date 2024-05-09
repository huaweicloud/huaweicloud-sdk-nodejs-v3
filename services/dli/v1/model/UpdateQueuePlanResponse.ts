
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateQueuePlanResponse extends SdkResponse {
    private 'queue_name'?: string;
    private 'plan_id'?: number;
    private 'is_success'?: boolean;
    public message?: string;
    public constructor() { 
        super();
    }
    public withQueueName(queueName: string): UpdateQueuePlanResponse {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withPlanId(planId: number): UpdateQueuePlanResponse {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: number  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): number | undefined {
        return this['plan_id'];
    }
    public withIsSuccess(isSuccess: boolean): UpdateQueuePlanResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): UpdateQueuePlanResponse {
        this['message'] = message;
        return this;
    }
}