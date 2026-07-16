import { ChangeTrainingExperimentRequestBody } from './ChangeTrainingExperimentRequestBody';


export class ChangeTrainingExperimentRequest {
    private 'experiment_id'?: string;
    public body?: ChangeTrainingExperimentRequestBody;
    public constructor(experimentId?: string) { 
        this['experiment_id'] = experimentId;
    }
    public withExperimentId(experimentId: string): ChangeTrainingExperimentRequest {
        this['experiment_id'] = experimentId;
        return this;
    }
    public set experimentId(experimentId: string  | undefined) {
        this['experiment_id'] = experimentId;
    }
    public get experimentId(): string | undefined {
        return this['experiment_id'];
    }
    public withBody(body: ChangeTrainingExperimentRequestBody): ChangeTrainingExperimentRequest {
        this['body'] = body;
        return this;
    }
}