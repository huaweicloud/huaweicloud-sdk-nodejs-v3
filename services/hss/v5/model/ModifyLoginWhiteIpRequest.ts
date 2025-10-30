import { ModifyLoginWhiteIpRequestBody } from './ModifyLoginWhiteIpRequestBody';


export class ModifyLoginWhiteIpRequest {
    private 'enterprise_project_id'?: string;
    public body?: ModifyLoginWhiteIpRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyLoginWhiteIpRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModifyLoginWhiteIpRequestBody): ModifyLoginWhiteIpRequest {
        this['body'] = body;
        return this;
    }
}