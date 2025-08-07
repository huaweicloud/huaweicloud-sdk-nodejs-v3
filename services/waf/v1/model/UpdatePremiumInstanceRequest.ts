import { UpdatePremiumInstanceRequestBody } from './UpdatePremiumInstanceRequestBody';


export class UpdatePremiumInstanceRequest {
    private 'instance_id'?: string;
    public body?: UpdatePremiumInstanceRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdatePremiumInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdatePremiumInstanceRequestBody): UpdatePremiumInstanceRequest {
        this['body'] = body;
        return this;
    }
}