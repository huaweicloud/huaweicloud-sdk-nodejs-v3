

export class StopPipelineNewRequest {
    private 'pipeline_id'?: string;
    private 'build_id'?: string;
    public constructor(pipelineId?: string, buildId?: string) { 
        this['pipeline_id'] = pipelineId;
        this['build_id'] = buildId;
    }
    public withPipelineId(pipelineId: string): StopPipelineNewRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withBuildId(buildId: string): StopPipelineNewRequest {
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