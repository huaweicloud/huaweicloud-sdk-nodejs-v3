import { ApiCheckInfoV2 } from './ApiCheckInfoV2';


export class CheckApisV2Request {
    private 'instance_id'?: string;
    public body?: ApiCheckInfoV2;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CheckApisV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiCheckInfoV2): CheckApisV2Request {
        this['body'] = body;
        return this;
    }
}