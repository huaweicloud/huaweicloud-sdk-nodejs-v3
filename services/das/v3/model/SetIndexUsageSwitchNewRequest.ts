import { SetIndexUsageSwitchNewRequestBody } from './SetIndexUsageSwitchNewRequestBody';


export class SetIndexUsageSwitchNewRequest {
    private 'instance_id'?: string;
    public body?: SetIndexUsageSwitchNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetIndexUsageSwitchNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetIndexUsageSwitchNewRequestBody): SetIndexUsageSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}