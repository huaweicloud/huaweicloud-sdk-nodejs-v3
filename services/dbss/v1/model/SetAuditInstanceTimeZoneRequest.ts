import { TimezoneRequest } from './TimezoneRequest';


export class SetAuditInstanceTimeZoneRequest {
    private 'instance_id'?: string;
    public body?: TimezoneRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetAuditInstanceTimeZoneRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: TimezoneRequest): SetAuditInstanceTimeZoneRequest {
        this['body'] = body;
        return this;
    }
}