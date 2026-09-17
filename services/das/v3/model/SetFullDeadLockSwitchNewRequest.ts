import { SetFullDeadLockSwitchNewRequestBody } from './SetFullDeadLockSwitchNewRequestBody';


export class SetFullDeadLockSwitchNewRequest {
    private 'instance_id'?: string;
    public body?: SetFullDeadLockSwitchNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetFullDeadLockSwitchNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetFullDeadLockSwitchNewRequestBody): SetFullDeadLockSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}