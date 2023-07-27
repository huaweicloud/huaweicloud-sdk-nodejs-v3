
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBareMetalServersResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateBareMetalServersResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withJobId(jobId: string): CreateBareMetalServersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}