import { ConfigAlarmTopicRequest } from './ConfigAlarmTopicRequest';


export class SetAlarmTopicConfigInfoRequest {
    private 'instance_id'?: string;
    public body?: ConfigAlarmTopicRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetAlarmTopicConfigInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ConfigAlarmTopicRequest): SetAlarmTopicConfigInfoRequest {
        this['body'] = body;
        return this;
    }
}