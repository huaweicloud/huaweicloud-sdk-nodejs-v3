
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDdmInstanceResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'order_id'?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateDdmInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): CreateDdmInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withId(id: string): CreateDdmInstanceResponse {
        this['id'] = id;
        return this;
    }
}