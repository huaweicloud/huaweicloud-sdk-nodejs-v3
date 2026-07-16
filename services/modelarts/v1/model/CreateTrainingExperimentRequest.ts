import { CreateTrainingExperimentRequestBody } from './CreateTrainingExperimentRequestBody';


export class CreateTrainingExperimentRequest {
    public body?: CreateTrainingExperimentRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTrainingExperimentRequestBody): CreateTrainingExperimentRequest {
        this['body'] = body;
        return this;
    }
}