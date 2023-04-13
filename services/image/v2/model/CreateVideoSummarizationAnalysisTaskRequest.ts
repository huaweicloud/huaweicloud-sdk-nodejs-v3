import { CreateVideoSummarizationTaskRequestBody } from './CreateVideoSummarizationTaskRequestBody';


export class CreateVideoSummarizationAnalysisTaskRequest {
    public body?: CreateVideoSummarizationTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVideoSummarizationTaskRequestBody): CreateVideoSummarizationAnalysisTaskRequest {
        this['body'] = body;
        return this;
    }
}