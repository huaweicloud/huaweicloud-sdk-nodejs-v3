

export class ListPipelineJobsRequest {
    private 'repository_id'?: number;
    private 'pipeline_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, pipelineId?: number) { 
        this['repository_id'] = repositoryId;
        this['pipeline_id'] = pipelineId;
    }
    public withRepositoryId(repositoryId: number): ListPipelineJobsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withPipelineId(pipelineId: number): ListPipelineJobsRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: number  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): number | undefined {
        return this['pipeline_id'];
    }
    public withOffset(offset: number): ListPipelineJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineJobsRequest {
        this['limit'] = limit;
        return this;
    }
}