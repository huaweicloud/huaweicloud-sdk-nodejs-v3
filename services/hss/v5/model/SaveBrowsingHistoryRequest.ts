import { SaveBrowsingHistoryRequestInfo } from './SaveBrowsingHistoryRequestInfo';


export class SaveBrowsingHistoryRequest {
    private 'enterprise_project_id'?: string;
    public body?: SaveBrowsingHistoryRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SaveBrowsingHistoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SaveBrowsingHistoryRequestInfo): SaveBrowsingHistoryRequest {
        this['body'] = body;
        return this;
    }
}