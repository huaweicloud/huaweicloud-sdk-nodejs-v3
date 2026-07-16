import { JobDescription } from './JobDescription';


export class ChangeTrainingJobDescriptionRequest {
    private 'training_job_id'?: string;
    public body?: JobDescription;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): ChangeTrainingJobDescriptionRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withBody(body: JobDescription): ChangeTrainingJobDescriptionRequest {
        this['body'] = body;
        return this;
    }
}