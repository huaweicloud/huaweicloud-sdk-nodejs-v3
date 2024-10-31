import { CreateLimitTaskRequestBody } from './CreateLimitTaskRequestBody';


export class CreateLimitTaskRequest {
    private 'instance_id'?: string;
    public body?: CreateLimitTaskRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateLimitTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateLimitTaskRequestBody): CreateLimitTaskRequest {
        this['body'] = body;
        return this;
    }
}