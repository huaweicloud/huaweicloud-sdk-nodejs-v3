import { ImportVulnerabilitiesRequestBody } from './ImportVulnerabilitiesRequestBody';


export class ImportVulnerabilitiesRequest {
    private 'workspace_id'?: string;
    public body?: ImportVulnerabilitiesRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ImportVulnerabilitiesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ImportVulnerabilitiesRequestBody): ImportVulnerabilitiesRequest {
        this['body'] = body;
        return this;
    }
}