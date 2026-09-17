import { SetMissingIndexSwitchNewRequestBody } from './SetMissingIndexSwitchNewRequestBody';


export class SetMissingIndexSwitchNewRequest {
    private 'instance_id'?: string;
    public body?: SetMissingIndexSwitchNewRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetMissingIndexSwitchNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetMissingIndexSwitchNewRequestBody): SetMissingIndexSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}