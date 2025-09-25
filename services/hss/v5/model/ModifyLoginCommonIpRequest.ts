import { ModifyLoginCommonIpRequestInfo } from './ModifyLoginCommonIpRequestInfo';


export class ModifyLoginCommonIpRequest {
    private 'enterprise_project_id'?: string;
    public body?: ModifyLoginCommonIpRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyLoginCommonIpRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModifyLoginCommonIpRequestInfo): ModifyLoginCommonIpRequest {
        this['body'] = body;
        return this;
    }
}