import { VaultResourceInstancesReq } from './VaultResourceInstancesReq';


export class ShowVaultResourceInstancesRequest {
    private 'enterprise_project_id'?: string;
    public body?: VaultResourceInstancesReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowVaultResourceInstancesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: VaultResourceInstancesReq): ShowVaultResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}