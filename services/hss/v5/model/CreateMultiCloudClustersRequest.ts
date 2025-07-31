import { MultiCloudClusterCreateRequestBody } from './MultiCloudClusterCreateRequestBody';


export class CreateMultiCloudClustersRequest {
    private 'enterprise_project_id'?: string;
    public body?: MultiCloudClusterCreateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateMultiCloudClustersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: MultiCloudClusterCreateRequestBody): CreateMultiCloudClustersRequest {
        this['body'] = body;
        return this;
    }
}