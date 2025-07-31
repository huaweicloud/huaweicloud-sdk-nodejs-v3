import { ModClusterProtectionEventRequest } from './ModClusterProtectionEventRequest';


export class ChangeClusterEventsRequest {
    private 'enterprise_project_id'?: string;
    public body?: ModClusterProtectionEventRequest;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeClusterEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModClusterProtectionEventRequest): ChangeClusterEventsRequest {
        this['body'] = body;
        return this;
    }
}