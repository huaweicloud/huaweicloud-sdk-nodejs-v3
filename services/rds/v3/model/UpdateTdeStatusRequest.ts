import { UpdateTdeStatusRequestBody } from './UpdateTdeStatusRequestBody';


export class UpdateTdeStatusRequest {
    private 'instance_id'?: string;
    public body?: UpdateTdeStatusRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateTdeStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateTdeStatusRequestBody): UpdateTdeStatusRequest {
        this['body'] = body;
        return this;
    }
}