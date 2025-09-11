import { ConfigReportTopicRequest } from './ConfigReportTopicRequest';


export class UpdateAuditTopicReportSchedulerConfigRequest {
    private 'instance_id'?: string;
    public body?: ConfigReportTopicRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateAuditTopicReportSchedulerConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ConfigReportTopicRequest): UpdateAuditTopicReportSchedulerConfigRequest {
        this['body'] = body;
        return this;
    }
}