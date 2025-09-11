

export class DeleteAuditAlarmLogRequest {
    private 'instance_id'?: string;
    public id?: string;
    public constructor(instanceId?: string, id?: string) { 
        this['instance_id'] = instanceId;
        this['id'] = id;
    }
    public withInstanceId(instanceId: string): DeleteAuditAlarmLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: string): DeleteAuditAlarmLogRequest {
        this['id'] = id;
        return this;
    }
}