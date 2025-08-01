import { DeleteInstanceRequestBody } from './DeleteInstanceRequestBody';


export class DeleteInstanceRequest {
    private 'instance_id'?: string;
    public body?: DeleteInstanceRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteInstanceRequestBody): DeleteInstanceRequest {
        this['body'] = body;
        return this;
    }
}