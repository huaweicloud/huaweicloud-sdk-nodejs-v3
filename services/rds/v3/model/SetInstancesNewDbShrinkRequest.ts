import { UpdateDBShrinkRequestBody } from './UpdateDBShrinkRequestBody';


export class SetInstancesNewDbShrinkRequest {
    private 'instance_id'?: string;
    public body?: UpdateDBShrinkRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetInstancesNewDbShrinkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateDBShrinkRequestBody): SetInstancesNewDbShrinkRequest {
        this['body'] = body;
        return this;
    }
}