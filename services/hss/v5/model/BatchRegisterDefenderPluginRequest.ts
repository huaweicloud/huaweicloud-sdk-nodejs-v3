import { BatchRegisterDefenderPluginRequestBody } from './BatchRegisterDefenderPluginRequestBody';


export class BatchRegisterDefenderPluginRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchRegisterDefenderPluginRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchRegisterDefenderPluginRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchRegisterDefenderPluginRequestBody): BatchRegisterDefenderPluginRequest {
        this['body'] = body;
        return this;
    }
}