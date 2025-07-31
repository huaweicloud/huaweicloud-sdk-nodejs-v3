import { MultiCloudClusterSyncStatusRequestBody } from './MultiCloudClusterSyncStatusRequestBody';


export class SyncMultiCloudClusterStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: MultiCloudClusterSyncStatusRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SyncMultiCloudClusterStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: MultiCloudClusterSyncStatusRequestBody): SyncMultiCloudClusterStatusRequest {
        this['body'] = body;
        return this;
    }
}