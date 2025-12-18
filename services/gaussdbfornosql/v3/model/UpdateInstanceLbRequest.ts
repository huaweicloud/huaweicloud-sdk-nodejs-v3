import { UpdateInstanceLBRequestBody } from './UpdateInstanceLBRequestBody';


export class UpdateInstanceLbRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceLBRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceLbRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceLBRequestBody): UpdateInstanceLbRequest {
        this['body'] = body;
        return this;
    }
}