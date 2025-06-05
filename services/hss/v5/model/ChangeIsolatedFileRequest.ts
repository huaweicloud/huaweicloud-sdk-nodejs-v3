import { ChangeIsolatedFileRequestInfo } from './ChangeIsolatedFileRequestInfo';


export class ChangeIsolatedFileRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: ChangeIsolatedFileRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): ChangeIsolatedFileRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeIsolatedFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeIsolatedFileRequestInfo): ChangeIsolatedFileRequest {
        this['body'] = body;
        return this;
    }
}