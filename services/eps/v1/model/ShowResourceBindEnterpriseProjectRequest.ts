import { ResqEpResouce } from './ResqEpResouce';


export class ShowResourceBindEnterpriseProjectRequest {
    private 'enterprise_project_id'?: string;
    public body?: ResqEpResouce;
    public constructor(enterpriseProjectId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowResourceBindEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ResqEpResouce): ShowResourceBindEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}