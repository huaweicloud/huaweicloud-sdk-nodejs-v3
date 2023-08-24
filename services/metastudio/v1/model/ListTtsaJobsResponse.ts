import { TTSAJob } from './TTSAJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTtsaJobsResponse extends SdkResponse {
    public total?: number;
    private 'ttsa_jobs'?: Array<TTSAJob>;
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
}