import { StandElementFieldVOList } from './StandElementFieldVOList';


export class InitializeStandardTemplateRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'action-id'?: string;
    public body?: StandElementFieldVOList;
    public constructor(workspace?: string, actionId?: string) { 
        this['workspace'] = workspace;
        this['action-id'] = actionId;
    }
    public withWorkspace(workspace: string): InitializeStandardTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): InitializeStandardTemplateRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): InitializeStandardTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withActionId(actionId: string): InitializeStandardTemplateRequest {
        this['action-id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action-id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action-id'];
    }
    public withBody(body: StandElementFieldVOList): InitializeStandardTemplateRequest {
        this['body'] = body;
        return this;
    }
}