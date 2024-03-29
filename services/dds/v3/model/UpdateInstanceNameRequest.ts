import { UpdateNameRequestBody } from './UpdateNameRequestBody';


export class UpdateInstanceNameRequest {
    private 'instance_id'?: string;
    public body?: UpdateNameRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateNameRequestBody): UpdateInstanceNameRequest {
        this['body'] = body;
        return this;
    }
}