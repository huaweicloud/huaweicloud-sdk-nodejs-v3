import { VulnerabilityDataObjectSearch } from './VulnerabilityDataObjectSearch';


export class ListVulnerabilitiesRequest {
    private 'workspace_id'?: string;
    public body?: VulnerabilityDataObjectSearch;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListVulnerabilitiesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: VulnerabilityDataObjectSearch): ListVulnerabilitiesRequest {
        this['body'] = body;
        return this;
    }
}