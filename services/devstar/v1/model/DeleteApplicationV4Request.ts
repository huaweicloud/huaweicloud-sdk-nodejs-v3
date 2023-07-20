

export class DeleteApplicationV4Request {
    private 'application_id'?: string;
    private 'is_delete_repository'?: boolean;
    private 'pipeline_ids'?: string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): DeleteApplicationV4Request {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withIsDeleteRepository(isDeleteRepository: boolean): DeleteApplicationV4Request {
        this['is_delete_repository'] = isDeleteRepository;
        return this;
    }
    public set isDeleteRepository(isDeleteRepository: boolean  | undefined) {
        this['is_delete_repository'] = isDeleteRepository;
    }
    public get isDeleteRepository(): boolean | undefined {
        return this['is_delete_repository'];
    }
    public withPipelineIds(pipelineIds: string): DeleteApplicationV4Request {
        this['pipeline_ids'] = pipelineIds;
        return this;
    }
    public set pipelineIds(pipelineIds: string  | undefined) {
        this['pipeline_ids'] = pipelineIds;
    }
    public get pipelineIds(): string | undefined {
        return this['pipeline_ids'];
    }
}