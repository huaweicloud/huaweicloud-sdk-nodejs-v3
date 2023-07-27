import { ApiGroupCreate } from './ApiGroupCreate';


export class CreateApiGroupV2Request {
    private 'instance_id'?: string;
    public body?: ApiGroupCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateApiGroupV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiGroupCreate): CreateApiGroupV2Request {
        this['body'] = body;
        return this;
    }
}