import { ReportGetReportsRequest } from './ReportGetReportsRequest';


export class ListAuditReportsRequest {
    private 'instance_id'?: string;
    public body?: ReportGetReportsRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditReportsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReportGetReportsRequest): ListAuditReportsRequest {
        this['body'] = body;
        return this;
    }
}