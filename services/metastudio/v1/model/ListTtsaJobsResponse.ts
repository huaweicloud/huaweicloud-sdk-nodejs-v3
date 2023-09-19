import { TTSAJob } from './TTSAJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTtsaJobsResponse extends SdkResponse {
    public total?: number;
    private 'ttsa_jobs'?: Array<TTSAJob>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTtsaJobsResponse {
        this['total'] = total;
        return this;
    }
    public withTtsaJobs(ttsaJobs: Array<TTSAJob>): ListTtsaJobsResponse {
        this['ttsa_jobs'] = ttsaJobs;
        return this;
    }
    public set ttsaJobs(ttsaJobs: Array<TTSAJob>  | undefined) {
        this['ttsa_jobs'] = ttsaJobs;
    }
    public get ttsaJobs(): Array<TTSAJob> | undefined {
        return this['ttsa_jobs'];
    }
    public withXRequestId(xRequestId: string): ListTtsaJobsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}