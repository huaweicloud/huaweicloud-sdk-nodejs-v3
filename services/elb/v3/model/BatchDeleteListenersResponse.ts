
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteListenersResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'listener_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): BatchDeleteListenersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withListenerIds(listenerIds: Array<string>): BatchDeleteListenersResponse {
        this['listener_ids'] = listenerIds;
        return this;
    }
    public set listenerIds(listenerIds: Array<string>  | undefined) {
        this['listener_ids'] = listenerIds;
    }
    public get listenerIds(): Array<string> | undefined {
        return this['listener_ids'];
    }
}