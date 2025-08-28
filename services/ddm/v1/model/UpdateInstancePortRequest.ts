import { UpdatePortRequest } from './UpdatePortRequest';


export class UpdateInstancePortRequest {
    private 'instance_id'?: string;
    public body?: UpdatePortRequest;
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
    public withBody(body: UpdatePortRequest): UpdateInstancePortRequest {
        this['body'] = body;
        return this;
    }
}