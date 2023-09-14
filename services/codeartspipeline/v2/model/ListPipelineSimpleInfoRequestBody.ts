

export class ListPipelineSimpleInfoRequestBody {
    private 'pipeline_name'?: string;
    private 'project_ids'?: string;
    private 'creator_ids'?: string;
    private 'executor_ids'?: string;
    public status?: string;
    public outcome?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'git_url'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withPipelineName(pipelineName: string): ListPipelineSimpleInfoRequestBody {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
    public withProjectIds(projectIds: string): ListPipelineSimpleInfoRequestBody {
        this['project_ids'] = projectIds;
        return this;
    }
    public set projectIds(projectIds: string  | undefined) {
        this['project_ids'] = projectIds;
    }
    public get projectIds(): string | undefined {
        return this['project_ids'];
    }
    public withCreatorIds(creatorIds: string): ListPipelineSimpleInfoRequestBody {
        this['creator_ids'] = creatorIds;
        return this;
    }
    public set creatorIds(creatorIds: string  | undefined) {
        this['creator_ids'] = creatorIds;
    }
    public get creatorIds(): string | undefined {
        return this['creator_ids'];
    }
    public withExecutorIds(executorIds: string): ListPipelineSimpleInfoRequestBody {
        this['executor_ids'] = executorIds;
        return this;
    }
    public set executorIds(executorIds: string  | undefined) {
        this['executor_ids'] = executorIds;
    }
    public get executorIds(): string | undefined {
        return this['executor_ids'];
    }
    public withStatus(status: string): ListPipelineSimpleInfoRequestBody {
        this['status'] = status;
        return this;
    }
    public withOutcome(outcome: string): ListPipelineSimpleInfoRequestBody {
        this['outcome'] = outcome;
        return this;
    }
    public withSortKey(sortKey: string): ListPipelineSimpleInfoRequestBody {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPipelineSimpleInfoRequestBody {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withGitUrl(gitUrl: string): ListPipelineSimpleInfoRequestBody {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withOffset(offset: number): ListPipelineSimpleInfoRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineSimpleInfoRequestBody {
        this['limit'] = limit;
        return this;
    }
}