

export class ShowDomainRequest {
    private 'source_project_id'?: string;
    public constructor(sourceProjectId?: string) { 
        this['source_project_id'] = sourceProjectId;
    }
    public withSourceProjectId(sourceProjectId: string): ShowDomainRequest {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
}