import { ListPortStatusRequestInfo } from './ListPortStatusRequestInfo';


export class BatchModifyPortStatusRequest {
    private 'enterprise_project_id'?: string;
    public category?: string;
    public body?: ListPortStatusRequestInfo;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchModifyPortStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCategory(category: string): BatchModifyPortStatusRequest {
        this['category'] = category;
        return this;
    }
    public withBody(body: ListPortStatusRequestInfo): BatchModifyPortStatusRequest {
        this['body'] = body;
        return this;
    }
}