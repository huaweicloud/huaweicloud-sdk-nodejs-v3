

export class TrainingExperimentRequestMetadata {
    public name?: string;
    public description?: string;
    private 'workspace_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): TrainingExperimentRequestMetadata {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TrainingExperimentRequestMetadata {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): TrainingExperimentRequestMetadata {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}