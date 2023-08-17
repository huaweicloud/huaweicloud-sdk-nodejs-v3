
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunPipelineResponse extends SdkResponse {
    private 'pipeline_run_id'?: string;
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
}