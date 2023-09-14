

export class PipelineBuildResult {
    private 'build_id'?: string;
    private 'elapse_time'?: string;
    private 'end_time'?: string;
    public outcome?: string;
    private 'pipeline_id'?: string;
    private 'pipeline_name'?: string;
    private 'start_time'?: string;
    public status?: string;
    public constructor(buildId?: string, endTime?: string, outcome?: string, pipelineId?: string, pipelineName?: string, startTime?: string, status?: string) { 
        this['build_id'] = buildId;
        this['end_time'] = endTime;
        this['outcome'] = outcome;
        this['pipeline_id'] = pipelineId;
        this['pipeline_name'] = pipelineName;
        this['start_time'] = startTime;
        this['status'] = status;
    }
    public withBuildId(buildId: string): PipelineBuildResult {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string  | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId(): string | undefined {
        return this['build_id'];
    }
    public withElapseTime(elapseTime: string): PipelineBuildResult {
        this['elapse_time'] = elapseTime;
        return this;
    }
    public set elapseTime(elapseTime: string  | undefined) {
        this['elapse_time'] = elapseTime;
    }
    public get elapseTime(): string | undefined {
        return this['elapse_time'];
    }
    public withEndTime(endTime: string): PipelineBuildResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOutcome(outcome: string): PipelineBuildResult {
        this['outcome'] = outcome;
        return this;
    }
    public withPipelineId(pipelineId: string): PipelineBuildResult {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineName(pipelineName: string): PipelineBuildResult {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
    public withStartTime(startTime: string): PipelineBuildResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStatus(status: string): PipelineBuildResult {
        this['status'] = status;
        return this;
    }
}