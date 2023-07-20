import { AddReadonlyNodeRequestBody } from './AddReadonlyNodeRequestBody';


export class AddReadonlyNodeRequest {
    private 'instance_id'?: string;
    public body?: AddReadonlyNodeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddReadonlyNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddReadonlyNodeRequestBody): AddReadonlyNodeRequest {
        this['body'] = body;
        return this;
    }
}