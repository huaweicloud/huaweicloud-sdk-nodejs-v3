import { AppCreate } from './AppCreate';


export class CreateAnAppV2Request {
    private 'instance_id'?: string;
    public body?: AppCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAnAppV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AppCreate): CreateAnAppV2Request {
        this['body'] = body;
        return this;
    }
}