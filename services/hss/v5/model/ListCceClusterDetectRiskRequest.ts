import { CCEClusterIdListRequestBody } from './CCEClusterIdListRequestBody';


export class ListCceClusterDetectRiskRequest {
    private 'enterprise_project_id'?: string;
    public body?: CCEClusterIdListRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCceClusterDetectRiskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CCEClusterIdListRequestBody): ListCceClusterDetectRiskRequest {
        this['body'] = body;
        return this;
    }
}