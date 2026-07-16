import { JobActionType } from './JobActionType';


export class StopTrainingJobRequest {
    private 'training_job_id'?: string;
    public body?: JobActionType;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): StopTrainingJobRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withBody(body: JobActionType): StopTrainingJobRequest {
        this['body'] = body;
        return this;
    }
}