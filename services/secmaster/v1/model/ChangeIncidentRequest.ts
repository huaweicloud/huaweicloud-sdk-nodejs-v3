import { ChangeIncidentRequestBody } from './ChangeIncidentRequestBody';


export class ChangeIncidentRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'incident_id'?: string;
    public body?: ChangeIncidentRequestBody;
    public constructor(contentType?: string, workspaceId?: string, incidentId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['incident_id'] = incidentId;
    }
    public withContentType(contentType: string): ChangeIncidentRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ChangeIncidentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withIncidentId(incidentId: string): ChangeIncidentRequest {
        this['incident_id'] = incidentId;
        return this;
    }
    public set incidentId(incidentId: string  | undefined) {
        this['incident_id'] = incidentId;
    }
    public get incidentId(): string | undefined {
        return this['incident_id'];
    }
    public withBody(body: ChangeIncidentRequestBody): ChangeIncidentRequest {
        this['body'] = body;
        return this;
    }
}