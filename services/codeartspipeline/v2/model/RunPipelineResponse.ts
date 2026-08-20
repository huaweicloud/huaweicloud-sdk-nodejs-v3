
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunPipelineResponse extends SdkResponse {
    private 'pipeline_run_id'?: string;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withPipelineRunId(pipelineRunId: string): RunPipelineResponse {
        this['pipeline_run_id'] = pipelineRunId;
        return this;
    }
    public set pipelineRunId(pipelineRunId: string  | undefined) {
        this['pipeline_run_id'] = pipelineRunId;
    }
    public get pipelineRunId(): string | undefined {
        return this['pipeline_run_id'];
    }
    public withErrorMsg(errorMsg: string): RunPipelineResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}