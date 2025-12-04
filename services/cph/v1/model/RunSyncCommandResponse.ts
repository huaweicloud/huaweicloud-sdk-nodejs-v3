import { RunSyncCommandJob } from './RunSyncCommandJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunSyncCommandResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<RunSyncCommandJob>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): RunSyncCommandResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<RunSyncCommandJob>): RunSyncCommandResponse {
        this['jobs'] = jobs;
        return this;
    }
}