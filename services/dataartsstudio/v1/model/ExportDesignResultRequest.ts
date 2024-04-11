

export class ExportDesignResultRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public uuid?: string;
    public constructor(workspace?: string, uuid?: string) { 
        this['workspace'] = workspace;
        this['uuid'] = uuid;
    }
    public withWorkspace(workspace: string): ExportDesignResultRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ExportDesignResultRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ExportDesignResultRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withUuid(uuid: string): ExportDesignResultRequest {
        this['uuid'] = uuid;
        return this;
    }
}