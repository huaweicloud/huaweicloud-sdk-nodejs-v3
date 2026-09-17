import { CreateKillTaskRequestBody } from './CreateKillTaskRequestBody';


export class CreateKillTaskRequest {
    private 'instance_id'?: string;
    public body?: CreateKillTaskRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateKillTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateKillTaskRequestBody): CreateKillTaskRequest {
        this['body'] = body;
        return this;
    }
}