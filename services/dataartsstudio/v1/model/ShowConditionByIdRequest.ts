

export class ShowConditionByIdRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowConditionByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowConditionByIdRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ShowConditionByIdRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): ShowConditionByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowConditionByIdRequest {
        this['latest'] = latest;
        return this;
    }
}