import { AddVulWhiteListRequestBody } from './AddVulWhiteListRequestBody';


export class AddVulWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: AddVulWhiteListRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddVulWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddVulWhiteListRequestBody): AddVulWhiteListRequest {
        this['body'] = body;
        return this;
    }
}