import { ModifyLoginCommonLocationRequestBody } from './ModifyLoginCommonLocationRequestBody';


export class ModifyLoginCommonLocationRequest {
    private 'enterprise_project_id'?: string;
    public body?: ModifyLoginCommonLocationRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyLoginCommonLocationRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModifyLoginCommonLocationRequestBody): ModifyLoginCommonLocationRequest {
        this['body'] = body;
        return this;
    }
}