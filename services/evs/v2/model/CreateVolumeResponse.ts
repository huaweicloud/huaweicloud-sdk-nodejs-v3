
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVolumeResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'order_id'?: string | undefined;
    private 'volume_ids'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateVolumeResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withOrderId(orderId: string): CreateVolumeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withVolumeIds(volumeIds: Array<string>): CreateVolumeResponse {
        this['volume_ids'] = volumeIds;
        return this;
    }
    public set volumeIds(volumeIds: Array<string> | undefined) {
        this['volume_ids'] = volumeIds;
    }
    public get volumeIds() {
        return this['volume_ids'];
    }
}