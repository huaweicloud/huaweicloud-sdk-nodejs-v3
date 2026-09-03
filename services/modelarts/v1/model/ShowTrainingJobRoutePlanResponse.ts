
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingJobRoutePlanResponse extends SdkResponse {
    private 'job_id'?: string;
    public status?: string;
    private 'rank_mapping'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowTrainingJobRoutePlanResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): ShowTrainingJobRoutePlanResponse {
        this['status'] = status;
        return this;
    }
    public withRankMapping(rankMapping: string): ShowTrainingJobRoutePlanResponse {
        this['rank_mapping'] = rankMapping;
        return this;
    }
    public set rankMapping(rankMapping: string  | undefined) {
        this['rank_mapping'] = rankMapping;
    }
    public get rankMapping(): string | undefined {
        return this['rank_mapping'];
    }
}