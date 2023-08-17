
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartNewPipelineResponse extends SdkResponse {
    private 'pipeline_id'?: string;
    private 'build_id'?: string;
    public constructor() { 
        super();
    }
    public withPipelineId(pipelineId: string): StartNewPipelineResponse {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withBuildId(buildId: string): StartNewPipelineResponse {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string  | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId(): string | undefined {
        return this['build_id'];
    }
}