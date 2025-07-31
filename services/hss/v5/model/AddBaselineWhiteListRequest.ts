import { AddBaselineWhiteListRequestBody } from './AddBaselineWhiteListRequestBody';


export class AddBaselineWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: AddBaselineWhiteListRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddBaselineWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddBaselineWhiteListRequestBody): AddBaselineWhiteListRequest {
        this['body'] = body;
        return this;
    }
}