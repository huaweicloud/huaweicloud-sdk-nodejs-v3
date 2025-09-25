import { EpsRemainingQuotaResult } from './EpsRemainingQuotaResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEpsRemainingQuotaResponse extends SdkResponse {
    private 'eps_quota_remaining'?: Array<EpsRemainingQuotaResult>;
    private 'job_id'?: string;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEpsQuotaRemaining(epsQuotaRemaining: Array<EpsRemainingQuotaResult>): ShowEpsRemainingQuotaResponse {
        this['eps_quota_remaining'] = epsQuotaRemaining;
        return this;
    }
    public set epsQuotaRemaining(epsQuotaRemaining: Array<EpsRemainingQuotaResult>  | undefined) {
        this['eps_quota_remaining'] = epsQuotaRemaining;
    }
    public get epsQuotaRemaining(): Array<EpsRemainingQuotaResult> | undefined {
        return this['eps_quota_remaining'];
    }
    public withJobId(jobId: string): ShowEpsRemainingQuotaResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTotalCount(totalCount: number): ShowEpsRemainingQuotaResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}