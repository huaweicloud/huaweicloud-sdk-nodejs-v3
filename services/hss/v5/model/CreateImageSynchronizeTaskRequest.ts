import { CreateImageSynchronizeTaskRequestInfo } from './CreateImageSynchronizeTaskRequestInfo';


export class CreateImageSynchronizeTaskRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CreateImageSynchronizeTaskRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): CreateImageSynchronizeTaskRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateImageSynchronizeTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateImageSynchronizeTaskRequestInfo): CreateImageSynchronizeTaskRequest {
        this['body'] = body;
        return this;
    }
}