

export class AlgorithmMetadata {
    public id?: number;
    public name?: string;
    public description?: string;
    private 'workspace_id'?: string;
    private 'ai_project'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: number): AlgorithmMetadata {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlgorithmMetadata {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AlgorithmMetadata {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): AlgorithmMetadata {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAiProject(aiProject: string): AlgorithmMetadata {
        this['ai_project'] = aiProject;
        return this;
    }
    public set aiProject(aiProject: string  | undefined) {
        this['ai_project'] = aiProject;
    }
    public get aiProject(): string | undefined {
        return this['ai_project'];
    }
}