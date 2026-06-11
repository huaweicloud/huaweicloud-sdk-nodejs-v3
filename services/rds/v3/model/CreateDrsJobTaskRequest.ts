import { CreateDrsTaskReq } from './CreateDrsTaskReq';


export class CreateDrsJobTaskRequest {
    private 'instance_id'?: string;
    public body?: CreateDrsTaskReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDrsJobTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDrsTaskReq): CreateDrsJobTaskRequest {
        this['body'] = body;
        return this;
    }
}