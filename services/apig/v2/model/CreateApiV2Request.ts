import { ApiCreate } from './ApiCreate';


export class CreateApiV2Request {
    private 'instance_id'?: string;
    public body?: ApiCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateApiV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiCreate): CreateApiV2Request {
        this['body'] = body;
        return this;
    }
}