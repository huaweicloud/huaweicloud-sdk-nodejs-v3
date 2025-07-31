import { CreateAntiVirusPaidTaskRequestInfo } from './CreateAntiVirusPaidTaskRequestInfo';


export class CreateAntiVirusPaidTaskRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CreateAntiVirusPaidTaskRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): CreateAntiVirusPaidTaskRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAntiVirusPaidTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateAntiVirusPaidTaskRequestInfo): CreateAntiVirusPaidTaskRequest {
        this['body'] = body;
        return this;
    }
}