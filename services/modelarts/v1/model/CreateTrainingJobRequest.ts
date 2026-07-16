import { Job } from './Job';


export class CreateTrainingJobRequest {
    public body?: Job;
    public constructor() { 
    }
    public withBody(body: Job): CreateTrainingJobRequest {
        this['body'] = body;
        return this;
    }
}