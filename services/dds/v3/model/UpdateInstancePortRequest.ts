import { UpdatePortRequestBody } from './UpdatePortRequestBody';


export class UpdateInstancePortRequest {
    private 'instance_id'?: string;
    public body?: UpdatePortRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstancePortRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdatePortRequestBody): UpdateInstancePortRequest {
        this['body'] = body;
        return this;
    }
}