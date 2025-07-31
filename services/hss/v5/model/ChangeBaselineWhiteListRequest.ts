import { ChangeBaselineWhiteListRequestBody } from './ChangeBaselineWhiteListRequestBody';


export class ChangeBaselineWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeBaselineWhiteListRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeBaselineWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeBaselineWhiteListRequestBody): ChangeBaselineWhiteListRequest {
        this['body'] = body;
        return this;
    }
}