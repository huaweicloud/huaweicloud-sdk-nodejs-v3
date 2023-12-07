import { ApiGroupCheck } from './ApiGroupCheck';


export class CheckApiGroupsV2Request {
    private 'instance_id'?: string;
    public body?: ApiGroupCheck;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CheckApiGroupsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiGroupCheck): CheckApiGroupsV2Request {
        this['body'] = body;
        return this;
    }
}