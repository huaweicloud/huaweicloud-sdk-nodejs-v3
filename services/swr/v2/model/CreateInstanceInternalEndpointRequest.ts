import { CreateIntranetAccessRequestBody } from './CreateIntranetAccessRequestBody';


export class CreateInstanceInternalEndpointRequest {
    private 'instance_id'?: string;
    public body?: CreateIntranetAccessRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceInternalEndpointRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateIntranetAccessRequestBody): CreateInstanceInternalEndpointRequest {
        this['body'] = body;
        return this;
    }
}