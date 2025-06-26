import { CreateRegistryRequestBody } from './CreateRegistryRequestBody';


export class CreateInstanceRegistryRequest {
    private 'instance_id'?: string;
    public body?: CreateRegistryRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceRegistryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateRegistryRequestBody): CreateInstanceRegistryRequest {
        this['body'] = body;
        return this;
    }
}