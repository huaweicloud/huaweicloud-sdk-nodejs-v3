import { ResourceIdsRequestInfo } from './ResourceIdsRequestInfo';


export class ListResourceIdsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: ResourceIdsRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): ListResourceIdsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListResourceIdsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ResourceIdsRequestInfo): ListResourceIdsRequest {
        this['body'] = body;
        return this;
    }
}