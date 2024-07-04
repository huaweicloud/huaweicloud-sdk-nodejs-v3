
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStarrocksParamsResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'restart_required'?: boolean;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateStarrocksParamsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRestartRequired(restartRequired: boolean): UpdateStarrocksParamsResponse {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
}