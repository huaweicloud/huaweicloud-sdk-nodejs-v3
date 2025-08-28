import { CreateGroupRequestBody } from './CreateGroupRequestBody';


export class CreateGroupRequest {
    private 'instance_id'?: string;
    public body?: CreateGroupRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateGroupRequestBody): CreateGroupRequest {
        this['body'] = body;
        return this;
    }
}