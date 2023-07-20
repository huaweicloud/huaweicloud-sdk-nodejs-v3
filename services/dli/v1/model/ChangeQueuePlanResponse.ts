
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeQueuePlanResponse extends SdkResponse {
    private 'queue_name'?: string;
    private 'plan_id'?: string;
    private 'is_success'?: boolean;
    public message?: string;
    public constructor() { 
        super();
    }
    public withQueueName(queueName: string): ChangeQueuePlanResponse {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withPlanId(planId: string): ChangeQueuePlanResponse {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withIsSuccess(isSuccess: boolean): ChangeQueuePlanResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ChangeQueuePlanResponse {
        this['message'] = message;
        return this;
    }
}