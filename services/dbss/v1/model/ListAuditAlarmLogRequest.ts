import { AlarmLogRequest } from './AlarmLogRequest';


export class ListAuditAlarmLogRequest {
    private 'instance_id'?: string;
    public body?: AlarmLogRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditAlarmLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AlarmLogRequest): ListAuditAlarmLogRequest {
        this['body'] = body;
        return this;
    }
}