

export class DeleteApplicationV4Request {
    private 'application_id': string | undefined;
    private 'is_delete_repository'?: boolean | undefined;
    private 'pipeline_ids'?: string | undefined;
    public constructor(applicationId?: any) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): DeleteApplicationV4Request {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
    public withIsDeleteRepository(isDeleteRepository: boolean): DeleteApplicationV4Request {
        this['is_delete_repository'] = isDeleteRepository;
        return this;
    }
    public set isDeleteRepository(isDeleteRepository: boolean | undefined) {
        this['is_delete_repository'] = isDeleteRepository;
    }
    public get isDeleteRepository() {
        return this['is_delete_repository'];
    }
    public withPipelineIds(pipelineIds: string): DeleteApplicationV4Request {
        this['pipeline_ids'] = pipelineIds;
        return this;
    }
    public set pipelineIds(pipelineIds: string | undefined) {
        this['pipeline_ids'] = pipelineIds;
    }
    public get pipelineIds() {
        return this['pipeline_ids'];
    }
}