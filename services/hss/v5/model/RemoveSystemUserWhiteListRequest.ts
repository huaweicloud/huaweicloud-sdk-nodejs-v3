import { RemoveSystemUserWhiteListRequestInfo } from './RemoveSystemUserWhiteListRequestInfo';


export class RemoveSystemUserWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: RemoveSystemUserWhiteListRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RemoveSystemUserWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: RemoveSystemUserWhiteListRequestInfo): RemoveSystemUserWhiteListRequest {
        this['body'] = body;
        return this;
    }
}