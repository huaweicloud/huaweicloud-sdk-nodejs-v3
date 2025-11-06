

export class PipelineStageDto {
    public id?: number;
    private 'repository_id'?: number;
    private 'pipeline_id'?: number;
    public name?: string;
    private 'sort_id'?: number;
    public status?: PipelineStageDtoStatusEnum | string;
    public constructor() { 
    }
    public withId(id: number): PipelineStageDto {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): PipelineStageDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withPipelineId(pipelineId: number): PipelineStageDto {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: number  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): number | undefined {
        return this['pipeline_id'];
    }
    public withName(name: string): PipelineStageDto {
        this['name'] = name;
        return this;
    }
    public withSortId(sortId: number): PipelineStageDto {
        this['sort_id'] = sortId;
        return this;
    }
    public set sortId(sortId: number  | undefined) {
        this['sort_id'] = sortId;
    }
    public get sortId(): number | undefined {
        return this['sort_id'];
    }
    public withStatus(status: PipelineStageDtoStatusEnum | string): PipelineStageDto {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineStageDtoStatusEnum {
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed',
    CANCELED = 'canceled',
    SKIPPED = 'skipped',
    TIMEDOUT = 'timedout'
}
