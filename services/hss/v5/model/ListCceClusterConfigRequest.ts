import { CCEClusterInfoListRequestBody } from './CCEClusterInfoListRequestBody';


export class ListCceClusterConfigRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CCEClusterInfoListRequestBody;
    public constructor() { 
    }
    public withRegion(region: string): ListCceClusterConfigRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCceClusterConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CCEClusterInfoListRequestBody): ListCceClusterConfigRequest {
        this['body'] = body;
        return this;
    }
}