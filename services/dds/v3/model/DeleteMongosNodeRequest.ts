import { DeleteMongosNodeRequestBody } from './DeleteMongosNodeRequestBody';


export class DeleteMongosNodeRequest {
    private 'instance_id'?: string;
    public body?: DeleteMongosNodeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteMongosNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteMongosNodeRequestBody): DeleteMongosNodeRequest {
        this['body'] = body;
        return this;
    }
}