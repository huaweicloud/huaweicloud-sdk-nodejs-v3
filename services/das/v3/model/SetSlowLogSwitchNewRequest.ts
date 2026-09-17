import { SetSlowLogSwitchNewRequestBody } from './SetSlowLogSwitchNewRequestBody';


export class SetSlowLogSwitchNewRequest {
    private 'instance_id'?: string;
    public body?: SetSlowLogSwitchNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetSlowLogSwitchNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetSlowLogSwitchNewRequestBody): SetSlowLogSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}