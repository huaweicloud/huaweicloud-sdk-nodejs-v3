
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPositionResultResponse extends SdkResponse {
    private 'job_id'?: string;
    public position?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowPositionResultResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withPosition(position: string): ShowPositionResultResponse {
        this['position'] = position;
        return this;
    }
}