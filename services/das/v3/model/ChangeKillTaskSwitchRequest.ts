import { ChangeKillTaskSwitchRequestBody } from './ChangeKillTaskSwitchRequestBody';


export class ChangeKillTaskSwitchRequest {
    private 'instance_id'?: string;
    public body?: ChangeKillTaskSwitchRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeKillTaskSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ChangeKillTaskSwitchRequestBody): ChangeKillTaskSwitchRequest {
        this['body'] = body;
        return this;
    }
}