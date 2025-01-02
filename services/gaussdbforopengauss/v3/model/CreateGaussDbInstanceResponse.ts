import { OpenGaussInstanceResult } from './OpenGaussInstanceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGaussDbInstanceResponse extends SdkResponse {
    public instance?: OpenGaussInstanceResult;
    private 'job_id'?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withInstance(instance: OpenGaussInstanceResult): CreateGaussDbInstanceResponse {
        this['instance'] = instance;
        return this;
    }
    public withJobId(jobId: string): CreateGaussDbInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): CreateGaussDbInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}