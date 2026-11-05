
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSupabaseApplicationResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'job_id'?: string;
    private 'application_id'?: string;
    private 'instance_id'?: string;
    private 'instance_job_id'?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateSupabaseApplicationResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withJobId(jobId: string): CreateSupabaseApplicationResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withApplicationId(applicationId: string): CreateSupabaseApplicationResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withInstanceId(instanceId: string): CreateSupabaseApplicationResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceJobId(instanceJobId: string): CreateSupabaseApplicationResponse {
        this['instance_job_id'] = instanceJobId;
        return this;
    }
    public set instanceJobId(instanceJobId: string  | undefined) {
        this['instance_job_id'] = instanceJobId;
    }
    public get instanceJobId(): string | undefined {
        return this['instance_job_id'];
    }
}