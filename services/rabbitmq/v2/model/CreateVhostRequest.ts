import { CreateVhostBody } from './CreateVhostBody';


export class CreateVhostRequest {
    private 'instance_id'?: string;
    public body?: CreateVhostBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateVhostRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateVhostBody): CreateVhostRequest {
        this['body'] = body;
        return this;
    }
}