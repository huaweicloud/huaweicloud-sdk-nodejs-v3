
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeVolumeResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'order_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ResizeVolumeResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withOrderId(orderId: string): ResizeVolumeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
}