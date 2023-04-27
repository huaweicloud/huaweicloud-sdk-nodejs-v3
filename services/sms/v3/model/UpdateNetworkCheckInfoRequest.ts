import { NetworkCheckInfoRequestBody } from './NetworkCheckInfoRequestBody';


export class UpdateNetworkCheckInfoRequest {
    private 'task_id': string | undefined;
    public body?: NetworkCheckInfoRequestBody;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateNetworkCheckInfoRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withBody(body: NetworkCheckInfoRequestBody): UpdateNetworkCheckInfoRequest {
        this['body'] = body;
        return this;
    }
}