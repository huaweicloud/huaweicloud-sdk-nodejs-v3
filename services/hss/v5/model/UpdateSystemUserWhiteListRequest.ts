import { UpdateSystemUserWhiteListRequestInfo } from './UpdateSystemUserWhiteListRequestInfo';


export class UpdateSystemUserWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: UpdateSystemUserWhiteListRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateSystemUserWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateSystemUserWhiteListRequestInfo): UpdateSystemUserWhiteListRequest {
        this['body'] = body;
        return this;
    }
}