import { DeleteReadonlyNodeRequestBody } from './DeleteReadonlyNodeRequestBody';


export class DeleteReadonlyNodeRequest {
    private 'instance_id'?: string;
    public body?: DeleteReadonlyNodeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteReadonlyNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteReadonlyNodeRequestBody): DeleteReadonlyNodeRequest {
        this['body'] = body;
        return this;
    }
}