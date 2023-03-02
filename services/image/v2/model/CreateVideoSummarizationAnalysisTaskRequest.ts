import { VideoSummarizationCreateTaskRequestBody } from './VideoSummarizationCreateTaskRequestBody';


export class CreateVideoSummarizationAnalysisTaskRequest {
    public body?: VideoSummarizationCreateTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: VideoSummarizationCreateTaskRequestBody): CreateVideoSummarizationAnalysisTaskRequest {
        this['body'] = body;
        return this;
    }
}