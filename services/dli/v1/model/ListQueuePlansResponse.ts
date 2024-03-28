import { QueuePlan } from './QueuePlan';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueuePlansResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public plans?: Array<QueuePlan>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListQueuePlansResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListQueuePlansResponse {
        this['message'] = message;
        return this;
    }
    public withPlans(plans: Array<QueuePlan>): ListQueuePlansResponse {
        this['plans'] = plans;
        return this;
    }
}