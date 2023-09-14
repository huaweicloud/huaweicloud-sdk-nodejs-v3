

export class PipelineBasicInfo {
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'pipeline_id'?: string;
    private 'pipeline_name'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'executor_id'?: string;
    private 'executor_name'?: string;
    private 'start_time'?: string;
    private 'create_time'?: string;
    public watched?: string;
    public constructor(projectId?: string, projectName?: string, pipelineId?: string, pipelineName?: string, creatorId?: string, creatorName?: string, executorId?: string, executorName?: string, startTime?: string, createTime?: string, watched?: string) { 
        this['project_id'] = projectId;
        this['project_name'] = projectName;
        this['pipeline_id'] = pipelineId;
        this['pipeline_name'] = pipelineName;
        this['creator_id'] = creatorId;
        this['creator_name'] = creatorName;
        this['executor_id'] = executorId;
        this['executor_name'] = executorName;
        this['start_time'] = startTime;
        this['create_time'] = createTime;
        this['watched'] = watched;
    }
    public withProjectId(projectId: string): PipelineBasicInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): PipelineBasicInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withPipelineId(pipelineId: string): PipelineBasicInfo {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineName(pipelineName: string): PipelineBasicInfo {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
    public withCreatorId(creatorId: string): PipelineBasicInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): PipelineBasicInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withExecutorId(executorId: string): PipelineBasicInfo {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorName(executorName: string): PipelineBasicInfo {
        this['executor_name'] = executorName;
        return this;
    }
    public set executorName(executorName: string  | undefined) {
        this['executor_name'] = executorName;
    }
    public get executorName(): string | undefined {
        return this['executor_name'];
    }
    public withStartTime(startTime: string): PipelineBasicInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withCreateTime(createTime: string): PipelineBasicInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withWatched(watched: string): PipelineBasicInfo {
        this['watched'] = watched;
        return this;
    }
}