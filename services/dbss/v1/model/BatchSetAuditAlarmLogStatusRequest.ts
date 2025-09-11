import { MarkAlarmLog } from './MarkAlarmLog';


export class BatchSetAuditAlarmLogStatusRequest {
    private 'instance_id'?: string;
    public body?: MarkAlarmLog;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchSetAuditAlarmLogStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MarkAlarmLog): BatchSetAuditAlarmLogStatusRequest {
        this['body'] = body;
        return this;
    }
}