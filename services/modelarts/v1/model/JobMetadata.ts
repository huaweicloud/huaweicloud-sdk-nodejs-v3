import { TrainingExperimentRequest } from './TrainingExperimentRequest';


export class JobMetadata {
    public name?: string;
    private 'workspace_id'?: string;
    public description?: string;
    public annotations?: { [key: string]: string; };
    private 'training_experiment_reference'?: TrainingExperimentRequest;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): JobMetadata {
        this['name'] = name;
        return this;
    }
    public withWorkspaceId(workspaceId: string): JobMetadata {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDescription(description: string): JobMetadata {
        this['description'] = description;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): JobMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withTrainingExperimentReference(trainingExperimentReference: TrainingExperimentRequest): JobMetadata {
        this['training_experiment_reference'] = trainingExperimentReference;
        return this;
    }
    public set trainingExperimentReference(trainingExperimentReference: TrainingExperimentRequest  | undefined) {
        this['training_experiment_reference'] = trainingExperimentReference;
    }
    public get trainingExperimentReference(): TrainingExperimentRequest | undefined {
        return this['training_experiment_reference'];
    }
}