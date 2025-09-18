import { TaskDetailRequest } from './TaskDetailRequest';


export class ShowTaskDetailRequest {
    private 'instance_id'?: string;
    public body?: TaskDetailRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowTaskDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: TaskDetailRequest): ShowTaskDetailRequest {
        this['body'] = body;
        return this;
    }
}