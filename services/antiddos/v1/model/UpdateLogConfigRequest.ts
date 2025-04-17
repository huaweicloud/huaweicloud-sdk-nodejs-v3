import { LtsConfigRequestAndResponse } from './LtsConfigRequestAndResponse';


export class UpdateLogConfigRequest {
    private 'enterprise_project_id'?: string;
    public body?: LtsConfigRequestAndResponse;
    public constructor(enterpriseProjectId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateLogConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: LtsConfigRequestAndResponse): UpdateLogConfigRequest {
        this['body'] = body;
        return this;
    }
}