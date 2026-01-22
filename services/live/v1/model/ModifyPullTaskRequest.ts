import { ModifyLivePullStreamTask } from './ModifyLivePullStreamTask';


export class ModifyPullTaskRequest {
    public body?: ModifyLivePullStreamTask;
    public constructor() { 
    }
    public withBody(body: ModifyLivePullStreamTask): ModifyPullTaskRequest {
        this['body'] = body;
        return this;
    }
}