import { ChangeVulWhiteListRequestBody } from './ChangeVulWhiteListRequestBody';


export class ChangeVulWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public id?: string;
    public body?: ChangeVulWhiteListRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeVulWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): ChangeVulWhiteListRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ChangeVulWhiteListRequestBody): ChangeVulWhiteListRequest {
        this['body'] = body;
        return this;
    }
}