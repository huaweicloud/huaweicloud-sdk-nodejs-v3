import { SetTwoFactorLoginConfigRequestBody } from './SetTwoFactorLoginConfigRequestBody';


export class SetTwoFactorLoginConfigRequest {
    private 'enterprise_project_id'?: string;
    public body?: SetTwoFactorLoginConfigRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetTwoFactorLoginConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SetTwoFactorLoginConfigRequestBody): SetTwoFactorLoginConfigRequest {
        this['body'] = body;
        return this;
    }
}