import { CreateConnectionRequestBody } from './CreateConnectionRequestBody';


export class CreateConnectionRequest {
    private 'instance_id'?: string;
    public body?: CreateConnectionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateConnectionRequestBody): CreateConnectionRequest {
        this['body'] = body;
        return this;
    }
}