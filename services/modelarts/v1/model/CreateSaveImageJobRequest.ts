import { ImageSaveJob } from './ImageSaveJob';


export class CreateSaveImageJobRequest {
    private 'training_job_id'?: string;
    private 'task_id'?: string;
    public body?: ImageSaveJob;
    public constructor(trainingJobId?: string, taskId?: string) { 
        this['training_job_id'] = trainingJobId;
        this['task_id'] = taskId;
    }
    public withTrainingJobId(trainingJobId: string): CreateSaveImageJobRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withTaskId(taskId: string): CreateSaveImageJobRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: ImageSaveJob): CreateSaveImageJobRequest {
        this['body'] = body;
        return this;
    }
}