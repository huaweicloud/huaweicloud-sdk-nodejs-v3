import { PublishArtifactsBody } from './PublishArtifactsBody';


export class PublishFtArtifactsRequest {
    private 'training_job_id'?: string;
    public body?: PublishArtifactsBody;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): PublishFtArtifactsRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withBody(body: PublishArtifactsBody): PublishFtArtifactsRequest {
        this['body'] = body;
        return this;
    }
}