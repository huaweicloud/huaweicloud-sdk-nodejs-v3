import { ChangeFilePathWhiteDetailRequestInfo } from './ChangeFilePathWhiteDetailRequestInfo';


export class ChangeFilePathWhiteDetailRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: ChangeFilePathWhiteDetailRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): ChangeFilePathWhiteDetailRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeFilePathWhiteDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeFilePathWhiteDetailRequestInfo): ChangeFilePathWhiteDetailRequest {
        this['body'] = body;
        return this;
    }
}