import { CreateIpRequestBody } from './CreateIpRequestBody';


export class CreateIpRequest {
    private 'instance_id'?: string;
    public body?: CreateIpRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateIpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateIpRequestBody): CreateIpRequest {
        this['body'] = body;
        return this;
    }
}