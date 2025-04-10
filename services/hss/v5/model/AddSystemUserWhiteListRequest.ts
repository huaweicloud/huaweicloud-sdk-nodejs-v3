import { AddSystemUserWhiteListRequestInfo } from './AddSystemUserWhiteListRequestInfo';


export class AddSystemUserWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: AddSystemUserWhiteListRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddSystemUserWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddSystemUserWhiteListRequestInfo): AddSystemUserWhiteListRequest {
        this['body'] = body;
        return this;
    }
}