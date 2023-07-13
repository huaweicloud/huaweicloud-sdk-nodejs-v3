import { ImageHighresolutionMattingRequestBody } from './ImageHighresolutionMattingRequestBody';


export class CreateImageHighresolutionMattingTaskRequest {
    public body?: ImageHighresolutionMattingRequestBody;
    public constructor() { 
    }
    public withBody(body: ImageHighresolutionMattingRequestBody): CreateImageHighresolutionMattingTaskRequest {
        this['body'] = body;
        return this;
    }
}