import { TrainingExperimentResp } from './TrainingExperimentResp';


export class JobMetadataResponse {
    public id?: string;
    public name?: string;
    private 'workspace_id'?: string;
    public description?: string;
    private 'create_time'?: number;
    private 'user_name'?: string;
    public annotations?: { [key: string]: string; };
    private 'training_experiment_reference'?: TrainingExperimentResp;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): JobMetadataResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobMetadataResponse {
        this['name'] = name;
        return this;
    }
    public withWorkspaceId(workspaceId: string): JobMetadataResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDescription(description: string): JobMetadataResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): JobMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUserName(userName: string): JobMetadataResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAnnotations(annotations: { [key: string]: string; }): JobMetadataResponse {
        this['annotations'] = annotations;
        return this;
    }
    public withTrainingExperimentReference(trainingExperimentReference: TrainingExperimentResp): JobMetadataResponse {
        this['training_experiment_reference'] = trainingExperimentReference;
        return this;
    }
    public set trainingExperimentReference(trainingExperimentReference: TrainingExperimentResp  | undefined) {
        this['training_experiment_reference'] = trainingExperimentReference;
    }
    public get trainingExperimentReference(): TrainingExperimentResp | undefined {
        return this['training_experiment_reference'];
    }
}