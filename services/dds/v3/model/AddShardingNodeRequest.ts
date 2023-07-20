import { EnlargeInstanceRequestBody } from './EnlargeInstanceRequestBody';


export class AddShardingNodeRequest {
    private 'instance_id'?: string;
    public body?: EnlargeInstanceRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddShardingNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EnlargeInstanceRequestBody): AddShardingNodeRequest {
        this['body'] = body;
        return this;
    }
}