import { CreateVideoSplitTaskRequestBody } from './CreateVideoSplitTaskRequestBody';


export class CreateVideoShotSplitTaskRequest {
    public body?: CreateVideoSplitTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVideoSplitTaskRequestBody): CreateVideoShotSplitTaskRequest {
        this['body'] = body;
        return this;
    }
}