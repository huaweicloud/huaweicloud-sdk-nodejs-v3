import { UpdateInstanceRemarkRequestBody } from './UpdateInstanceRemarkRequestBody';


export class UpdateInstanceRemarkRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceRemarkRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceRemarkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceRemarkRequestBody): UpdateInstanceRemarkRequest {
        this['body'] = body;
        return this;
    }
}