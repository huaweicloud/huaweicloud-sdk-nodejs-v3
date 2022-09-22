import { PostTask } from './PostTask';


export class CreateTaskRequest {
    public body?: PostTask;
    public constructor() { 
    }
    public withBody(body: PostTask): CreateTaskRequest {
        this['body'] = body;
        return this;
    }
}