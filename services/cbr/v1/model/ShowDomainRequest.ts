

export class ShowDomainRequest {
    private 'source_project_id': string | undefined;
    public constructor(sourceProjectId?: any) { 
        this['source_project_id'] = sourceProjectId;
    }
    public withSourceProjectId(sourceProjectId: string): ShowDomainRequest {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId() {
        return this['source_project_id'];
    }
}