import { DeleteIsolatedFileRequestInfo } from './DeleteIsolatedFileRequestInfo';


export class DeleteIsolatedFileRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeleteIsolatedFileRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteIsolatedFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeleteIsolatedFileRequestInfo): DeleteIsolatedFileRequest {
        this['body'] = body;
        return this;
    }
}