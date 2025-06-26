import { CreateInstanceNamespaceRequestBody } from './CreateInstanceNamespaceRequestBody';


export class CreateInstanceNamespaceRequest {
    private 'instance_id'?: string;
    public body?: CreateInstanceNamespaceRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceNamespaceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateInstanceNamespaceRequestBody): CreateInstanceNamespaceRequest {
        this['body'] = body;
        return this;
    }
}