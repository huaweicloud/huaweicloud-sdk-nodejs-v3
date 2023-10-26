import { RunImageSynchronizeRequestInfo } from './RunImageSynchronizeRequestInfo';


export class RunImageSynchronizeRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: RunImageSynchronizeRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): RunImageSynchronizeRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RunImageSynchronizeRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: RunImageSynchronizeRequestInfo): RunImageSynchronizeRequest {
        this['body'] = body;
        return this;
    }
}