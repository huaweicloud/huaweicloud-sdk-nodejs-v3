import { AssociateHostAssetValueRequestInfo } from './AssociateHostAssetValueRequestInfo';


export class AssociateHostAssetValueRequest {
    private 'enterprise_project_id'?: string;
    public body?: AssociateHostAssetValueRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateHostAssetValueRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AssociateHostAssetValueRequestInfo): AssociateHostAssetValueRequest {
        this['body'] = body;
        return this;
    }
}