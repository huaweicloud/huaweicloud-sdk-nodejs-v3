import { CloneListenerResp } from './CloneListenerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CloneListenerResponse extends SdkResponse {
    private 'listener_list'?: Array<CloneListenerResp>;
    private 'request_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withListenerList(listenerList: Array<CloneListenerResp>): CloneListenerResponse {
        this['listener_list'] = listenerList;
        return this;
    }
    public set listenerList(listenerList: Array<CloneListenerResp>  | undefined) {
        this['listener_list'] = listenerList;
    }
    public get listenerList(): Array<CloneListenerResp> | undefined {
        return this['listener_list'];
    }
    public withRequestId(requestId: string): CloneListenerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobId(jobId: string): CloneListenerResponse {
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