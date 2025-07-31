import { BatchStartWebTamperProtectionRequestInfo } from './BatchStartWebTamperProtectionRequestInfo';


export class BatchStartWebTamperProtectionRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchStartWebTamperProtectionRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchStartWebTamperProtectionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchStartWebTamperProtectionRequestInfo): BatchStartWebTamperProtectionRequest {
        this['body'] = body;
        return this;
    }
}