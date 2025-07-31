import { ChangePasswordComplexityStatusRequestBody } from './ChangePasswordComplexityStatusRequestBody';


export class ChangePasswordComplexityStatusRequest {
    private 'enterprise_project_id'?: string;
    public action?: string;
    public body?: ChangePasswordComplexityStatusRequestBody;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangePasswordComplexityStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAction(action: string): ChangePasswordComplexityStatusRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: ChangePasswordComplexityStatusRequestBody): ChangePasswordComplexityStatusRequest {
        this['body'] = body;
        return this;
    }
}