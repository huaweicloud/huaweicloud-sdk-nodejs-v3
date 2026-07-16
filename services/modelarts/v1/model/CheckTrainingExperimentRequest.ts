

export class CheckTrainingExperimentRequest {
    private 'workspace_id'?: string;
    private 'experiment_name'?: string;
    public constructor(experimentName?: string) { 
        this['experiment_name'] = experimentName;
    }
    public withWorkspaceId(workspaceId: string): CheckTrainingExperimentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withExperimentName(experimentName: string): CheckTrainingExperimentRequest {
        this['experiment_name'] = experimentName;
        return this;
    }
    public set experimentName(experimentName: string  | undefined) {
        this['experiment_name'] = experimentName;
    }
    public get experimentName(): string | undefined {
        return this['experiment_name'];
    }
}