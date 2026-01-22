import { LivePullStreamTask } from './LivePullStreamTask';


export class CreatePullTaskRequest {
    public body?: LivePullStreamTask;
    public constructor() { 
    }
    public withBody(body: LivePullStreamTask): CreatePullTaskRequest {
        this['body'] = body;
        return this;
    }
}