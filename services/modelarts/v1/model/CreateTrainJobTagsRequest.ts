import { CreateTmsTagsRequest } from './CreateTmsTagsRequest';


export class CreateTrainJobTagsRequest {
    private 'training_job_id'?: string;
    public body?: CreateTmsTagsRequest;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): CreateTrainJobTagsRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withBody(body: CreateTmsTagsRequest): CreateTrainJobTagsRequest {
        this['body'] = body;
        return this;
    }
}