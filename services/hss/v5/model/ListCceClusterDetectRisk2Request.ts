import { CCEClusterIdListRequestBody } from './CCEClusterIdListRequestBody';


export class ListCceClusterDetectRisk2Request {
    private 'enterprise_project_id'?: string;
    public body?: CCEClusterIdListRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCceClusterDetectRisk2Request {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CCEClusterIdListRequestBody): ListCceClusterDetectRisk2Request {
        this['body'] = body;
        return this;
    }
}