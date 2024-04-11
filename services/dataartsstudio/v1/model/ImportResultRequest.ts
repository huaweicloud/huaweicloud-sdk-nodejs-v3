

export class ImportResultRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public uuid?: string;
    public constructor(workspace?: string, uuid?: string) { 
        this['workspace'] = workspace;
        this['uuid'] = uuid;
    }
    public withWorkspace(workspace: string): ImportResultRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ImportResultRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ImportResultRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withUuid(uuid: string): ImportResultRequest {
        this['uuid'] = uuid;
        return this;
    }
}