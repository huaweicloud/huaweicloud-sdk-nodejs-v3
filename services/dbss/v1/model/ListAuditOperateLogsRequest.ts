import { OperateLogGetRequest } from './OperateLogGetRequest';


export class ListAuditOperateLogsRequest {
    private 'instance_id'?: string;
    public body?: OperateLogGetRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditOperateLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: OperateLogGetRequest): ListAuditOperateLogsRequest {
        this['body'] = body;
        return this;
    }
}