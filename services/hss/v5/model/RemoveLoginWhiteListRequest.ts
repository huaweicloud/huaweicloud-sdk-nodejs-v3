import { RemoveLoginWhiteListRequestInfo } from './RemoveLoginWhiteListRequestInfo';


export class RemoveLoginWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: RemoveLoginWhiteListRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RemoveLoginWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: RemoveLoginWhiteListRequestInfo): RemoveLoginWhiteListRequest {
        this['body'] = body;
        return this;
    }
}