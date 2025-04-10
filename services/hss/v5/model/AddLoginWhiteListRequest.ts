import { AddLoginWhiteListRequestInfo } from './AddLoginWhiteListRequestInfo';


export class AddLoginWhiteListRequest {
    private 'enterprise_project_id'?: string;
    public body?: AddLoginWhiteListRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddLoginWhiteListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddLoginWhiteListRequestInfo): AddLoginWhiteListRequest {
        this['body'] = body;
        return this;
    }
}