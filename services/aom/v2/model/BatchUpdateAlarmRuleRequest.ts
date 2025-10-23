import { BatchUpdateRequest } from './BatchUpdateRequest';


export class BatchUpdateAlarmRuleRequest {
    public action?: string;
    private 'Enterprise-Project-Id'?: string;
    public body?: BatchUpdateRequest;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): BatchUpdateAlarmRuleRequest {
        this['action'] = action;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchUpdateAlarmRuleRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: BatchUpdateRequest): BatchUpdateAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}