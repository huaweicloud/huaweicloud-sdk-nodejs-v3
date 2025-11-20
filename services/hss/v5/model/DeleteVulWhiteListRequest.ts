import { DeleteVulWhiteListBody } from './DeleteVulWhiteListBody';


export class DeleteVulWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeleteVulWhiteListBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteVulWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeleteVulWhiteListBody): DeleteVulWhiteListRequest {
        this['body'] = body;
        return this;
    }
}