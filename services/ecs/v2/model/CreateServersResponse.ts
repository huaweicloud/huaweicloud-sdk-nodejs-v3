
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateServersResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'order_id'?: string | undefined;
    public serverIds?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateServersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withOrderId(orderId: string): CreateServersResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withServerIds(serverIds: Array<string>): CreateServersResponse {
        this['serverIds'] = serverIds;
        return this;
    }
}